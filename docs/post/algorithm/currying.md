# 函数的柯里化

__说明__：什么是柯里化：是把接受多个参数的函数变成接受一个单一参数的函数.

举例来说，一个接收3个参数的普通函数，在进行柯里化后， 柯里化版本的函数接收一个参数并返回接收下一个参数的函数， 该函数返回一个接收第三个参数的函数。 最后一个函数在接收第三个参数后， 将之前接收到的三个参数应用于原普通函数中，并返回最终结果。

```js
//一个接收三个参数的普通函数
function sum(a,b,c) {
    console.log(a+b+c)
}

//用于将普通函数转化为柯里化版本的工具函数
function curry(fn) {
  //...内部实现省略，返回一个新函数
}

//获取一个柯里化后的函数
let _sum = curry(sum);

//返回一个接收第二个参数的函数
let A = _sum(1);
//返回一个接收第三个参数的函数
let B = A(2);
//接收到最后一个参数，将之前所有的参数应用到原函数中，并运行
B(3)    // print : 6
```

### 实现思路

1. 闭包
2. 递归
3. 判断: 形参和实参的长度

### 代码实现

```js
const curry = function(fn, ...args1) {
            if(args1.length === fn.length){
                return fn(...args1)
            }else{
                return (args2)=> {
                    return  curry(fn, ...args1, args2)
                }
            }
        }
```

#### 简化版

```js
const curry = (fn, ...args) => args.length === fn.length ? fn(...args) : (args2) => curry(fn, ...args, args2)
```
