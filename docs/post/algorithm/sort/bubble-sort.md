# 冒泡排序
1. 冒泡算法作的核心是每次排序，让相邻的两数对比，得到最大的数字，每次排序得到最大的数在右边
2. 内层遍历对比相邻的两数，得到最大的数字放在最右边
3. 如果相邻的两数左侧比右侧大， 则将左侧的数字放在右边

```js
const bubbleSort = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        // 每次已知最后一个是最大的 所以 - i -1
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // 交换位置
                // let tmpArr = [arr[j], arr[j + 1]];
                // arr[j] = tmpArr[1];
                // arr[j + 1] = tmpArr[0];
                // tmpArr = null;
                arr[j] = [arr[j + 1], arr[j + 1] = arr[j]][0];
            }
        }
    }
    return arr;
}
```
