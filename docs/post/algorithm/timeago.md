# 时间处理方法

## 描述

给一个过去的时间对象，和现在的时间对比，输出友好的时间差价，比如“几分钟前”，“几小时前”，“几天前”等等

## 代码实现

```js
const timeFormat = (time) => {
    const data = new Date(time);
    const timeStamp = data.getTime();
    const diffValue = Date.now() - timeStamp;
    const second = Math.floor(diffValue / 1000);
    const minute = Math.floor(second / 60);
    const hour = Math.floor(minute / 60);
    const day = Math.floor(hour / 24);
    const month = Math.floor(day / 30);
    const year = Math.floor(month / 12);
    let tip = '';
    switch (true) {
        case year > 0:
            tip = `${year}年前`;
            break;
        case month > 0:
            tip = `${month}个月前`;
            break;
        case day > 0:
            tip = `${day}天前`;
            break;
        case hour > 0:
            tip = `${hour}小时前`;
            break;
        case minute > 0:
            tip = `${minute}分钟前`;
            break;
        case second > 0:
            tip = `${second}秒前`;
            break;
        default:
            tip = '刚刚';
    }
    return tip;
}
```
