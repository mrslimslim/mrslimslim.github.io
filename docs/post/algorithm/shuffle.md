# 洗牌算法

__题目说明__：生成一个长度为n的数组，且数组成员为1-n，然后随机打散这个数组，生成一个随机排列的素组

> 输入3 <br/>
> 输出 [2, 1, 3]

### 解题思路

1. 通过Array(n)生成一个长度为n的数组，然后通过以下算法生成长度为n的有序数组

```js
Array(n).fill().map((_, i) => i + 1)
```

2. 然后开始遍历数组，每次遍历生成0到n-1的数组，作为和当前元素的交换的值的索引，也可以通过sort方法来打散数组

```js
arr.sort(() => .5 - Math.random())
```

```js
const shuffle = (n) => {
    const arr = Arrary(n).fill().map((_, i) => i + 1);
    // for(let i = n - 1; i > 0; i++){
    //     const rand = Math.floor(Math.random() * n);
    //     [arr[i], arr[rand]] = [arr[rand], arr[i]];
    // }
    arr.sort(() => .5 - Math.random());
    return arr;
}
```
