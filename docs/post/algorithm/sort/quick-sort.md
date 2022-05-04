<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: tengyu
 * @Date: 2022-02-12 15:41:41
 * @LastEditors: tengyu
 * @LastEditTime: 2022-04-25 23:49:05
-->

# 快速排序

## 快速排序说明

1. 从数组中（一般是中间数）作为基准，
2. 比基准数大的放在右侧，比基准数小的放在左侧
3. 上面操作完成之后，左侧和右侧的数组,递归重复上面的操作，直到数组的长度等于1

## 代码实现

```js
function quickSort(arr) {
    if (arr.length === 1) return arr;
    const left = [],
        right = [];
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr.splice(pivotIndex, 1)[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));

}
```

## 算法解析

快速排序的最坏情况是O(n²), 比如说顺序数列的快排。但它的平摊期望时间是 O(nlogn)，且 O(nlogn) 记号中隐含的常数因子很小，比复杂度稳定等于 O(nlogn) 的归并排序要小很多。
