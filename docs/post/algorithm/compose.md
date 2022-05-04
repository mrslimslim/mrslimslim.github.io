<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: tengyu
 * @Date: 2022-04-25 21:25:06
 * @LastEditors: tengyu
 * @LastEditTime: 2022-04-25 22:38:00
-->

# compose 函数实现

## 题目描述

compose 函数的特点:

* 参数是多个函数，返回值是一个“组合函数”。
* 组合函数内的所有的函数从右至左一个一个执行（主要符合数学从右到左的操作概念）。
* 组合函数内除了第一个执行函数的参数是多元的，其它函数的参数都是接收上一个函数的返回值。

## 使用方式：

```js
let sayHello = (...str) => `Hello , ${str.join(" And ")}`;
let toUpper = str => str.toUpperCase();
let composer = compose(
    sayHello,
    toUpper
);

composer("jack", "bob"); // HELLO , JACK AND BOB
```

## 实现思路

1. 前一个函数的执行返回，是后一个函数的参数
2. 可以用reduceRight来控制

## 代码实现

```js
function compose(...args) {
    return (value) => args.reduceRight((acc, fn) => fn(acc), value);
}
```
