# 无重复字符串的最长字串

## 题目描述

给定一个字符串s，请你找出其中不含有重复字符串的__最长子串__的长度

> 输入: s = "abcabcbb" <br/>
> 输出: 3 <br/>
> 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。<br/>

> 输入: s = "bbbbb"<br/>
> 输出: 1<br/>
> 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。<br/>

## 解题思路

滑动窗口：来源于计算机网络，其原型滑动窗口协议是TCP-IP协议的应用，主要用于网络数据传输时的流量控制，以避免拥塞的发生。

在介绍滑动窗口的框架时候，大家先从字面理解下：

- **滑动**：说明这个窗口使移动的，按照方向移动的
- **窗口**：窗口大小并不是固定的，可以不断扩容直到满足一定的条件；也可以不断缩小，直到找到满足条件的最小窗口，当然也可以使固定大小。

## 代码实现

```js
const lengthOfLongest = (str) => {
    if (str.length === 0) return str.length
    let l = 0, maxLen = 0;
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i]) !== undefined) {
            l = Math.max(l, map.get(str[i]) + 1)
        }
        map.set(str[i], i);
        maxLen = Math.max(maxLen, i - l + 1)
    }
    return l;
}
```
