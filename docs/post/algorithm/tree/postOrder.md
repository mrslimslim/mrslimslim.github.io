# 二叉树的后序遍历

## 题目描述

给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。

## 示例

示例1

> 输入：root = [1,null,2,3]  
> 输出：[3,2,1]  

示例2

> 输入：root = []  
> 输出：[]  

示例3

> 输入 root = [1]  
> 输出 [1]  

## 解题思路

### 后序遍历

从下到上，从左到右，左侧的节点遍历完成之后从下遍历右侧的节点，图中箭头上的数字代表遍历的顺序

![后序遍历](https://blog-1253253332.cos.ap-guangzhou.myqcloud.com/images/postOrder-tree.png)

#### 递归的方法

1. 从root开始遍历  
2. 开始递归，将root的左节点和右节点分别开始递归遍历，递归结束之后开始，将值保存在数组中

## 代码实现  


### 递归实现

```js
function postOrderTraversal(root){
    if(!root) return [];
    const result = [];
    function order(node, arr){
        if(!node) return [];
        order(node.left, arr);
        order(node.right, arr);
        // 这个顺序很重要
        arr.push(node.val);
    }
    order(root, result);
    return result;
}
```  

### DFS遍历实现
