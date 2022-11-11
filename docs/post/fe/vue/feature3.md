# Vue3的新特性

## 为什么要升级到vue3: 尤雨溪的回答是两个关键因素

* 主流浏览器对新的Javascript语言特点的普遍支持，IE逐渐退出历史舞台
* 当前Vue代码库随着时间的推移暴露出来的设计和体系架构问题

## Vue2.x 对比 Vue3

### 使用Proxy代替defineProperty

#### Vue2.0 痛点

1. defineProperty是对对象的属性进行绑定，新增的属性无法实现响应式。(可以使用全局提供的$set来手动给新增属性observer)
2. 此外对数组需要hack处理
3. 对TS的支持不友好



### 生命周期

|   **Vue2.x**  |     **Vue3**   |
|:-------------:|:---------------------:|
| beforeCreate |    **使用setup()**     |
| created      |    **使用setup()**     |
| beforeMount  | 兼容也可以使用钩子 onBeforeMount|
| mounted  | 兼容也可以使用钩子onMounted |
| beforeUpdate | 兼容 & onBeforeUpdate|
| updated | 兼容 & onUpdated |
| beforeDestroy | **onBeforeUnmount** |
| destroyed | **onUnmounted** |
| errorCapture | **onErrorCapture** |
