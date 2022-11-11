# keep-alive的用法和原理


keep-alive 是 Vue 源码中实现的一个组件，也就是说 Vue 源码不仅实现了一套组件化的机制，也实现了一些内置组件，它的定义在 src/core/components/keep-alive.js 中

```js
export default {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created () {
    this.cache = Object.create(null)
    this.keys = []
  },

  destroyed () {
    for (const key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys)
    }
  },

  mounted () {
    this.$watch('include', val => {
      pruneCache(this, name => matches(val, name))
    })
    this.$watch('exclude', val => {
      pruneCache(this, name => !matches(val, name))
    })
  },

  render () {
    const slot = this.$slots.default
    const vnode: VNode = getFirstComponentChild(slot)
    const componentOptions: ?VNodeComponentOptions = vnode && vnode.componentOptions
    if (componentOptions) {
      // check pattern
      const name: ?string = getComponentName(componentOptions)
      const { include, exclude } = this
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      const { cache, keys } = this
      const key: ?string = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
        : vnode.key
      //  LRU算法
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance
        // make current key freshest
        remove(keys, key)
        keys.push(key)
      } else {
        cache[key] = vnode
        keys.push(key)
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode)
        }
      }

      vnode.data.keepAlive = true
    }
    return vnode || (slot && slot[0])
  }
}
```

## keep-alive 里面的关键属性

1. **this.cache** 和**this.keys**
2. **exclude**和**include**
3. **max**，最大缓存数，避免占用大量内存


注意，keep-alive 组件也是为观测 include 和 exclude 的变化，对缓存做处理：

```js
watch: {
  include (val: string | RegExp | Array<string>) {
    pruneCache(this, name => matches(val, name))
  },
  exclude (val: string | RegExp | Array<string>) {
    pruneCache(this, name => !matches(val, name))
  }
}

function pruneCache (keepAliveInstance: any, filter: Function) {
  const { cache, keys, _vnode } = keepAliveInstance
  for (const key in cache) {
    const cachedNode: ?VNode = cache[key]
    if (cachedNode) {
      const name: ?string = getComponentName(cachedNode.componentOptions)
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode)
      }
    }
  }
}
```

逻辑很简单，观测他们的变化执行 pruneCache 函数，其实就是对 cache 做遍历，发现缓存的节点名称和新的规则没有匹配上的时候，就把这个缓存节点从缓存中摘除。


## 组件渲染

到此为止，我们只了解了 keep-alive 的组件实现，但并不知道它包裹的子组件渲染和普通组件有什么不一样的地方。我们关注 2 个方面，首次渲染和缓存渲染。

同样为了更好地理解，我们也结合一个示例来分析：

```js
let A = {
  template: '<div class="a">' +
  '<p>A Comp</p>' +
  '</div>',
  name: 'A'
}

let B = {
  template: '<div class="b">' +
  '<p>B Comp</p>' +
  '</div>',
  name: 'B'
}

let vm = new Vue({
  el: '#app',
  template: '<div>' +
  'keep-alive' +
  '<component :is="currentComp">' +
  '</component>' +
  '</keep-alive>' +
  '<button @click="change">switch</button>' +
  '</div>',
  data: {
    currentComp: 'A'
  },
  methods: {
    change() {
      this.currentComp = this.currentComp === 'A' ? 'B' : 'A'
    }
  },
  components: {
    A,
    B
  }
})
```

## 首次渲染

我们知道 Vue 的渲染最后都会到 patch 过程，而组件的 patch 过程会执行 createComponent 方法，它的定义在 src/core/vdom/patch.js 中：

```js
function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
  let i = vnode.data
  if (isDef(i)) {
    const isReactivated = isDef(vnode.componentInstance) && i.keepAlive
    if (isDef(i = i.hook) && isDef(i = i.init)) {
      i(vnode, false /* hydrating */)
    }
    // after calling the init hook, if the vnode is a child component
    // it should've created a child instance and mounted it. the child
    // component also has set the placeholder vnode's elm.
    // in that case we can just return the element and be done.
    if (isDef(vnode.componentInstance)) {
      initComponent(vnode, insertedVnodeQueue)
      insert(parentElm, vnode.elm, refElm)
      if (isTrue(isReactivated)) {
        reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm)
      }
      return true
    }
  }
}
```

createComponent 定义了 isReactivated 的变量，它是根据 vnode.componentInstance 以及 vnode.data.keepAlive 的判断，第一次渲染的时候，vnode.componentInstance 为 undefined，vnode.data.keepAlive 为 true，因为它的父组件 keep-alive 的 render 函数会先执行，那么该 vnode 缓存到内存中，并且设置 vnode.data.keepAlive 为 true，因此 **isReactivated** 为 false，那么走正常的 init 的钩子函数执行组件的 mount。当 vnode 已经执行完 patch 后，执行 initComponent 函数：

```js
function initComponent (vnode, insertedVnodeQueue) {
  if (isDef(vnode.data.pendingInsert)) {
    insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert)
    vnode.data.pendingInsert = null
  }
  vnode.elm = vnode.componentInstance.$el
  if (isPatchable(vnode)) {
    invokeCreateHooks(vnode, insertedVnodeQueue)
    setScope(vnode)
  } else {
    // empty component root.
    // skip all element-related modules except for ref (#3455)
    registerRef(vnode)
    // make sure to invoke the insert hook
    insertedVnodeQueue.push(vnode)
  }
}
```

这里会有 vnode.elm 缓存了 vnode 创建生成的 DOM 节点。所以对于首次渲染而言，除了在 keep-alive 中建立缓存，和普通组件渲染没什么区别。

所以对我们的例子，初始化渲染 A 组件以及第一次点击 switch 渲染 B 组件，都是首次渲染。


## 缓存渲染

当我们从 B 组件再次点击 switch 切换到 A 组件，就会命中缓存渲染。

我们之前分析过，当数据发送变化，在 patch 的过程中会执行 patchVnode 的逻辑，它会对比新旧 vnode 节点，甚至对比它们的子节点去做更新逻辑，但是对于组件 vnode 而言，是没有 children 的，那么对于 keep-alive 组件而言，如何更新它包裹的内容呢？

原来 patchVnode 在做各种 diff 之前，会先执行 prepatch 的钩子函数，它的定义在 src/core/vdom/create-component 中：

```js
const componentVNodeHooks = {
  prepatch (oldVnode: MountedComponentVNode, vnode: MountedComponentVNode) {
    const options = vnode.componentOptions
    const child = vnode.componentInstance = oldVnode.componentInstance
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    )
  },
  // ...
}
```

prepatch 核心逻辑就是执行 updateChildComponent 方法，它的定义在 src/core/instance/lifecycle.js 中：

```js
export function updateChildComponent (
  vm: Component,
  propsData: ?Object,
  listeners: ?Object,
  parentVnode: MountedComponentVNode,
  renderChildren: ?Array<VNode>
) {
  const hasChildren = !!(
    renderChildren ||          
    vm.$options._renderChildren ||
    parentVnode.data.scopedSlots || 
    vm.$scopedSlots !== emptyObject 
  )

  // ...
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context)
    vm.$forceUpdate()
  }
}
```


## 生命周期
之前我们提到，组件一旦被 keep-alive 缓存，那么再次渲染的时候就**不会执行 created、mounted 等钩子函数**，但是我们很多业务场景都是希望在我们被缓存的组件再次被渲染的时候做一些事情，好在 Vue 提供了 **activated 钩子函数，它的执行时机是 keep-alive 包裹的组件渲染的时候**，接下来我们从源码角度来分析一下它的实现原理。

在渲染的最后一步，会执行 invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch) 函数执行 vnode 的 insert 钩子函数，它的定义在 src/core/vdom/create-component.js 中：


## 总结

1. keep-alive是vue中内置的抽象组件，帮助我们缓存组件，避免重复渲染
2. keep-alive是的使用是通过keep-alive,配合其属性exclude,include以及max来使用,一般搭配vue-router使用
3. 被keep-alive包裹的组件，在patch过程中对已缓存的组件不会执行mounted，所以就不会有mounted钩子执行
4. 但是提供了activeted和deactived钩子函数
5. 可以通过在路由meta对象中定义keepAlive来确定哪些组件走keep-alive，哪些组件是默认渲染



那么至此，keep-alive 的实现原理就介绍完了，通过分析我们知道了 keep-alive 组件是一个抽象组件，它的实现通过自定义 render 函数并且利用了插槽，并且知道了 keep-alive 缓存 vnode，了解组件包裹的子元素——也就是插槽是如何做更新的。**且在 patch 过程中对于已缓存的组件不会执行 mounted**，所以不会有一般的组件的生命周期函数但是又提供了 activated 和 deactivated 钩子函数。另外我们还知道了 keep-alive 的 props 除了 include 和 exclude 还有文档中没有提到的 max，它能控制我们缓存的个数。