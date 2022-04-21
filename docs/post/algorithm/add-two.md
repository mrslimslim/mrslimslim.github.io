# 两数之和

## 题目说明

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

## 演示

### 实例1

> 输入：nums = [2,7,11,15], target = 9
> 输出：[0,1]
> 因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

### 实例2

> 输入：nums = [3,2,4], target = 6
> 输出：[1,2]

## 解题思路

1. 遍历时用Map记录当前值和对应索引,键值表示为value: index
2. 如果当前 target - currentValue,在Map中有记录时，说明记录的值和当前的值之和为 target，满足条件

## 代码

```js
const twoSum = (nums, target)=>{
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return []
}
```
