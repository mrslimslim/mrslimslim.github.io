# 链表反转

__题目说明__: 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

> 输入：head = [1,2,3,4,5] <br>
> 输出：[5,4,3,2,1] <br>

<https://leetcode-cn.com/problems/reverse-linked-list/solution/dong-hua-yan-shi-206-fan-zhuan-lian-biao-by-user74/>
解题思路1：双指针

- 创建prev指针
- 编辑链表
- 创建临时节点保存curr.next
- curr节点指向prev指针
- prev = curr,prev 进一位
- curr = next, next 进一位
- 当迭代完了，prev就是最后一个节点，我们也完成了反转链表

-

```js
function ListNode(val,next){
    this.val = val===undefined ? 0 : val;
    this.next = next===null ? null : next;
}

// null 1->2->3->5->null null<-1 2->3->4->5->null
var reverseList = function(head){
    let prev = null, curr = head;
    while(curr!=null){
        // 临时的next节点，保存剩下的curr
        let next = curr.next;
        // 当前节点指向 prev
        curr.next = prev;
        
        prev = curr;
        
        curr = next;
    }
    return prev;
}
```
