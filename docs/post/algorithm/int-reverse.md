
# 整数反转

## 题目描述

给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。 <br>

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。<br>

**假设环境不允许存储 64 位整数（有符号或无符号）。**

## 示例

示例 1：
> 输入：x = 123
> 输出：321

示例 2：
> 输入：x = -123
> 输出：-321

示例3
> 输入：x = 120
> 输出：21

## 解题思路

1. 遍历目标数的每一位，从个，十，百...，直到最后一位，number = ~~(number / 10)
2. 使用数的取余和数的取余的方式，得到数的最后一位tmp
3. ** 更新result，latest_result =  prev_result * 10 + tmp **
4. 判断result,如果result的值合法则循环继续，不合法返回0
5. 结束循环

![](https://blog-1253253332.cos.ap-guangzhou.myqcloud.com/images/reverseInt.jpeg)

## 代码实现

```js
function reverse(number){
    let tmp = 0; // 记录最后一位
    let result = 0; // 最后的返回
    while(number > 0){
        tmp = number % 10; // 最后一位
        number = ~~(number / 10); // 去掉最后一位之后的新number
        result = result * 10 + tmp;
        if( result > 2 ** 31 - 1 || result < -(2 ** 31)){
            return 0;
        }
    }
    return result;
}
```
