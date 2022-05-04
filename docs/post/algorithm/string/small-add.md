# 小数相加

## 题目描述

给定小于1的两个浮点类型的数字,使其相加等于准确的数字,避免出现浮点数相加进度丢失的问题

## 解题思路

1. 将小数转化成整数相加,然后除以,放大的倍数
2. 获取最多的小数点后面的位数,从而确定我们放大的倍数

## 代码实现

```js
const smallAdd = (num1, num2) => {
    const num1Zero = String(num1).split('.')[1]?.length || 0;
    const num2Zero = String(num2).split('.')[1]?.length || 0;
    const maxZero = Math.max(num1Zero, num2Zero);
    const pow  = 10 ** maxZero;
    return (pow * num1 + pow * num2) / pow;
}
```
