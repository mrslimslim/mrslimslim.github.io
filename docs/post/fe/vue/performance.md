# Vue 性能优化

## Functional components

函数式组件和普通的对象类型的组件不同，它不会被看作成一个真正的组件，我们知道在 patch 过程中，如果遇到一个节点是组件 vnode，会递归执行子组件的初始化过程；而函数式组件的 render 生成的是普通的 vnode，不会有递归子组件的过程，因此渲染开销会低很多。

> 函数式组件也不会有状态，不会有响应式数据，生命周期钩子函数这些东西。可以把它当成把普通组件模板中的一部分 DOM 剥离出来，通过函数的方式渲染出来，是一种在 DOM 层面的复用。

优化前组件写法：

```vue
<template>
  <div class="cell">
    <div v-if="value" class="on"></div>
    <section v-else class="off"></section>
  </div>
</template>

<script>
export default {
  props: ['value'],
}
</script>
```

优化后写法：

```vue
<template functional>
  <div class="cell">
    <div v-if="props.value" class="on"></div>
    <section v-else class="off"></section>
  </div>
</template>
```

## 子组件拆分

由于 Vue 的更新是组件粒度的，虽然每一帧都通过数据修改导致了父组件的重新渲染，但是 ChildComp 却不会重新渲染，因为它的内部也没有任何响应式数据的变化。所以优化后的组件不会在每次渲染都执行耗时任务，自然执行的 JavaScript 时间就变少了。

优化前写法：

```vue
<template>
  <div :style="{ opacity: number / 300 }">
    <div>{{ heavy() }}</div>
  </div>
</template>

<script>
export default {
  props: ['number'],
  methods: {
    heavy () {
      const n = 100000
      let result = 0
      for (let i = 0; i < n; i++) {
        result += Math.sqrt(Math.cos(Math.sin(42)))
      }
      return result
    }
  }
}
</script>
```

优化后写法：

```vue
<template>
  <div :style="{ opacity: number / 300 }">
    <ChildComp/>
  </div>
</template>

<script>
export default {
  components: {
    ChildComp: {
      methods: {
        heavy () {
          const n = 100000
          let result = 0
          for (let i = 0; i < n; i++) {
            result += Math.sqrt(Math.cos(Math.sin(42)))
          }
          return result
        },
      },
      render (h) {
        return h('div', this.heavy())
      }
    }
  },
  props: ['number']
}
</script>
```

## 局部变量

## 特定场景缓存复用组件(v-show, keep-alive)
