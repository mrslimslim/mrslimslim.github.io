# 两数相加

__题目描述__：给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

> 输入：l1 = [2, 4, 3], l2 = [5, 6, 4] <br/>
> 输出：[7, 0, 8] <br/>
> 解释：342 + 465 = 807. <br/>

* 核心思路是将生成一个新的链表
* 然后遍历l1和l2这两个链表
* 新链表的结点的值是l1 和 l2 head的value加上进位值(carry)之和
* 如果l1和l2当中有一个已经结束则，新节点的值的为 当前存在链表的head的value加上carry的和
* 遍历结束之后判断当前carry的值是不为0，不为0则继续指向1

```js
var addTwoNumbers = function(l1, l2) {
    let n = new ListNode(0),
        p = n;
    let carry = 0,
        sum = 0,
        total;
    while (l1 !== null || l2 !== null) {
        const newP = new ListNode(0);
        if (l2 === null) {
            total = l1.val + carry;
            sum = total % 10;
            carry = parseInt(total / 10);
            l1 = l1.next;
        } else if (l1 === null) {
            total = l2.val + carry;
            sum = l2.val + carry % 10;
            carry = parseInt(total / 10);
            l2 = l2.next;
        } else {
            total = l2.val + l1.val + carry;
            sum = total % 10;
            carry = parseInt(total / 10);
            l1 = l1.next;
            l2 = l2.next;
        }
        newP.val = sum;
        p.next = newP;
        p = p.next;
    }
    if (carry === 1) {
        p.next = new ListNode(1);
    }
    return n.next;
};
```
