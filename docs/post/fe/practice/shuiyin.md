# 水印删除方案
1. 用canvas 生产水印，用canvas生成base64,生成body的background-image
2. 用 MutationObserver 监听body元素如果body被修改，则重绘水印

## 方案

```js
function drawPrint() {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 300;
    const ctx = canvas.getContext('2d');
    ctx.font = '16px Microsoft YaHei';
    ctx.fillText('mrslimslim', canvas.width / 8, canvas.height / 4);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.rotate(-0.3);
    const img = canvas.toDataURL('image/png');
    const style = `background-image: url(${img})`;
    document.body.setAttribute('style', style);
}
drawPrint();
const body = document.body;

const mutation = new MutationObserver(() => {
    drawPrint();
});

// 需要观察的变动
const config = {
    attributes: true
};
mutation.observe(body, config);
```
