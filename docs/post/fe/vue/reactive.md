# Vue响应式原理与实现

响应式是DOM渲染之后更新，数据视图响应更新的过程。Vue把数据驱动除了数据渲染DOM之外还有一个重要的体现就是数据的变更会触发DOM的更新。

## 响应式对象

vue2里面我们主要使用的是**Object.defineProperty**来实现响应式的

用法
```js
Object.defineProperty(target, prop, descriptor)
```

比较核心的是 **descriptor**，它有很多可选键值，具体的可以去参阅它的文档。这里我们最关心的是 get 和 set，get 是一个给属性提供的 getter 方法，当我们访问了该属性的时候会触发 getter 方法；set 是一个给属性提供的 setter 方法，当我们对该属性做修改的时候会触发 setter 方法。

### Object.defineProperty

#### getter
getter做的事是依赖(watcher)收集

#### setter
setter做的是派发更新 notify
### initState
初试化的过程是将他们变成响应式对象（初始化之后如何新增）

### proxy

在walk方法或者observe中，我们发现数据都是在vm.__data__，或者vm.__props__保存，但是我们实际在使用的过程中，我们可以通过vm[someKey]的方式获取。实际上我们是在初始化(initState/initProps)方法里面会执行proxy方法，实际上执行了一次Object.defineProperty，将响应的对象直接映射到vm上面了

### 数组的处理

### 重要对象

#### Dep

#### Watcher


#### Observer

**observe** 方法的作用就是给非 **VNode 的对象类型数据添加一个 Observer**，如果已经添加过则直接返回，否则在满足一定条件下去实例化一个 Observer 对象实例。接下来我们来看一下 Observer 的作用。

## 依赖收集
依赖收集是组件在挂载的过程中实现 **mountComponent**
```js
export function mountComponent (
  vm: Component,
  el: ?Element,
  hydrating?: boolean
): Component {
  vm.$el = el
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        )
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        )
      }
    }
  }
  callHook(vm, 'beforeMount')

  let updateComponent
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = () => {
      const name = vm._name
      const id = vm._uid
      const startTag = `vue-perf-start:${id}`
      const endTag = `vue-perf-end:${id}`

      mark(startTag)
      const vnode = vm._render()
      mark(endTag)
      measure(`vue ${name} render`, startTag, endTag)

      mark(startTag)
      vm._update(vnode, hydrating)
      mark(endTag)
      measure(`vue ${name} patch`, startTag, endTag)
    }
  } else {
    updateComponent = () => {
      vm._update(vm._render(), hydrating)
    }
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before () {
      if (vm._isMounted) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }, true /* isRenderWatcher */)
  hydrating = false

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true
    callHook(vm, 'mounted')
  }
  return vm
}
```

在 **new Watcher()**的过程中 会出发 updateComponnet方法，这个方法，这实际上就是在执行：

```js
vm._update(vm._render(), hydrating)
```

它会先执行 vm._render() 方法，**因为之前分析过这个方法会生成 渲染 VNode，并且在这个过程中会对 vm 上的数据访问**，这个时候就触发了数据对象的 getter。





