# 大数相加

## 问题描述

给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

## 解题思路

### 思路1

使用ES6新特性BigInt,将两个字符串转换成BigInt, 相加之后转换成字符串

### 思路2

1. 转化成字符串十进制相加,一个变量记录是否有进位carry, 用一个变量字符串表示结果result
2. 计算两个字符串中的最大长度, 将两个字符串的长度变成一样
3. 反向遍历字符串(从个位开始处理),判断当前相加是否大于10, 是否进位,然后累加处理

## 代码实现

### 解法一

```js
const addBig = (num1, num2) => {
    return (BigInt(num1) + BigInt(num2)).toString();
}
```

### 解法二

```js
const addBig = (num1, num2) => {
    let carry = 0, result = '';
    const maxLen = Math.max(num1.length, num2.length2);
    num1 = num1.padStart(maxLen, 0);
    num2 = num2.padStart(maxLen, 0);
    for(let i = maxLen - 1; i >= 0 ; i--){
        const sum = num1[i] + num2[i] + carry;
        carry = ~~sum/10;
        result = String(sum%10) + result;
    }
    return result;
}
```
