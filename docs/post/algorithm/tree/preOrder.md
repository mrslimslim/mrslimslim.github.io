# 二叉树的前序遍历

## 题目描述

给你二叉树的根节点 root ，返回它节点值的 前序 遍历。


## 示例

示例1

> 输入：root = [1, null, 2, 3]  
> 输出：[1, 2, 3]  

示例2

> 输入：root = []
> 输出：[]  

示例3

> 输入：root = [1]  
> 输出：[1]  

## 解题思路

### 什么是二叉树: 包含当前值，左节点，右节点

```js
function TreeNode(val, left ,right){
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? 0 : left);
    this.right = (right === undefined ? 0 : right);
}
```

### 前序遍历

从上到下，从左到右，左侧遍历完之后遍历完右侧所有节点，图中箭头上的数字代表遍历的顺序

![前序遍历示意图](https://blog-1253253332.cos.ap-guangzhou.myqcloud.com/images/preOrder-tree.png)

#### 递归的方法

1. 直接开始遍历，从root开始
2. 开始递归，将root的左右节点和值取出，值保留在数组中，左右节点循环遍历，直至为空为止

#### 使用DFS遍历

1. 将root节点压入栈内
2. 遍历栈，当前节点出栈，取值
3. 判断当前节点是否存在右节点和左节点，分别压入栈内
4. 继续遍历直到所有节点遍历完


## 代码实现


### 递归实现

```js
function preOrderTraversal(root){
    if(!root) return [];
    const result = [];
    function order(node, arr){
        if(!node) return;
        result.push(node.val);
        order(node.left, arr);
        order(node.right, arr);
    }
    result.push(root.val);
    order(root.left, result);
    order(root.right, result);
    return result;
}
```

### 栈DFS实现

```js
function preOrderTraversal(root){
    if(!root) return [];
    const stack = [root], result = [];
    while(stack.length > 0){
        // 出栈
        const node = stack.pop();
        result.push(node.val);
        // 入栈
        node.right && stack.push(node.right);
        node.left && stack.push(node.left);
    }
    return result;
}
```