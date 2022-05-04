# 归并排序

归并排序利用了分治的思想来对序列进行排序.我们将其分解成2个长度为n/2的子序列,每次先递归调用函数使两个子序列有序,然后我们再线性合并两个有序的子序列使整个序列有序.

归并排序采用的是分治的思想

![归并排序](https://blog-1253253332.cos.ap-guangzhou.myqcloud.com/images/merge-sort.jpeg)

## 代码

```js
const mergeSort = (arr) => {
    const len = arr.length;
    if(len <= 1) return arr;
    let mid = Math.floor(len /2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    const result = [];
    while(left.length && right.length){
        // 注意: 判断的条件是小于或等于
        if(left[0] <= right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    while(left.length) result.push(left.shift());
    while(right.length) result.push(right.shift());
    return result;
}
```
