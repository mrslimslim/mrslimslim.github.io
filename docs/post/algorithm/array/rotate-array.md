# 旋转数组

## 题目描述

给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

## 示例

> 输入: nums = [1,2,3,4,5,6,7], k = 3  
输出: [5,6,7,1,2,3,4]  
解释:  
向右轮转 1 步: [7,1,2,3,4,5,6]  
向右轮转 2 步: [6,7,1,2,3,4,5]  
向右轮转 3 步: [5,6,7,1,2,3,4]  

> 输入：nums = [-1,-100,3,99], k = 2  
输出：[3,99,-1,-100]  
解释:  
向右轮转 1 步: [99,-1,-100,3]  
向右轮转 2 步: [3,99,-1,-100]  

进阶：

尽可能想出更多的解决方案，至少有 三种 不同的方法可以解决这个问题。  
你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？

## 解决思路

一般解题思路  

临时数组  

1. 创建一个和原数组一样的临时数组
2. 遍历数组，然后数组往后偏移k个索引(i + k) % len

![](https://blog-1253253332.cos.ap-guangzhou.myqcloud.com/images/rorate-array.png)

多次反转

1. 先反转全部数组
2. 反转前k个数字
3. 再反转k至len的数字
4. 当需要反转的数字大于数组的长度的时候，对数组长度取余

## 代码实现

```js
function rotate(nums, k){
    const tmp = [...nums], len = nums.length;
    for(let i = 0; i < len; i++){
        nums[(i + k) % len] = tmp[i];
    }
}
```

```js
function rotate(nums, k){
    const len = nums.length;
    k = k % len;
    partReverse(nums, 0, len - 1);
    partReverse(nums, 0, k - 1);
    partReverse(nums, k, len - 1);
    
}

function partReverse(nums, start, end){
    while(start < end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end++;
    }
}
```
