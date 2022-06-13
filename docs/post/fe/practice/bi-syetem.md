# 可视化BI系统的搭建

## 屏幕自适应

```js
adjustScreen() {
      this.scaleRation =
        window.innerHeight / 1080 > window.innerWidth / 1920
          ? window.innerWidth / 1920
          : window.innerHeight / 1080;
    },
```
