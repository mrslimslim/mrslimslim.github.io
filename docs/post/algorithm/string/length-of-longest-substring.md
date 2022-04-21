# 无重复字符串的最长字串

## 题目描述

给定一个字符串s，请你找出其中不含有重复字符串的__最长子串__的长度

> 输入: s = "abcabcbb" <br/>
> 输出: 3 <br/>
> 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。<br/>

> 输入: s = "bbbbb"<br/>
> 输出: 1<br/>
> 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。<br/>

## 解体思路

```js
const lengthOfLongest = (str) => {
    if (str.length === 0) return str.length
    let l = 0;
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            l = Math.max(l, map.get(str[i]) + 1)
        }
        map.set(str[i], i);
    }
    return l;
}
```
