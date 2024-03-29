# prefetch 和 preload 的应用场景

## preload 介绍和使用

preload 提供了一种声明式的命令，让浏览器可以提前加载高优先级资源(不执行)，在需要执行的时候执行。

1. **将加载和执行分离**，不会阻塞 document 的 onload 事件
2. 提升资源(font, style, javascript)加载的优先级，解决如(优化)字体闪动的问题

使用了 preload
![使用了preload](https://blog-1253253332.cos.ap-guangzhou.myqcloud.com/images/preload.png)

没有使用 preload
![没有使用preload](https://blog-1253253332.cos.ap-guangzhou.myqcloud.com/images/没有preload.png)

### 使用方法

```html
<link rel="preload" as="style" href="//at.alicdn.com/t/font_1175572_qt0ubitzjhl.css"" onload="this.rel = 'stylesheet'"></link>
```

### preload 注意

1. _目前浏览器基本上都具备预测解析能力，可以提前解析入口 html 中外链的资源，因此入口脚本文件、样式文件等不需要特意进行 preload。_ 因此我们主要使用的场景是处理 FOUT(flash of unstyled Text )，在网速较差的情况下，字体未来得及的加载下,文字的闪动。

2. 但是一些隐藏在 CSS 和 JavaScript 中的资源，如字体文件，本身是首屏关键资源，但当 css 文件解析之后才会被浏览器加载。这种场景适合使用 preload 进行声明，尽早进行资源加载，避免页面渲染延迟。

3. preload 是提前加载，但是不会执行，如果需要加载后执行，需要添加属性 onload = "this.rel = 'stylesheet'"(js 的话需要手动载入)

4. 字体 font 使用 preload 需要添加 crossorigin 属性，否则会导致二次加载(浏览器会采用匿名模式的 CORS 去 preload，导致两次请求无法共用缓存。)

5. 导致 window.onload 提前执行，造成 js 执行不符合预期，window.getComputeStyle()获取错误

### 最佳实践

1. 大部分场景下无需特意的使用 preload
2. 隐藏在 css 里面的字体(font face)、样式中的首屏加载关键资源，建议是用 preload
3. 异步加载的模块中的非首页(js, image)建议使用 prefetch
4. 可以使用 preload-webpack-plugin 在 webpack 中对资源进行 preload 优化

## prefetch 介绍和使用

prefetch 针对页面中的一些必需但是低优先级的资源，比如非首页的 js 和图片样式资源。当用户访问其中一个预读文档，就可以快速的浏览器的缓存中获取。

使用方法

```html
<link rel="prefetch" href="/images/big.jpeg" />
```

### prefetch 注意点

1. 当资源被预加载的时候点击某个链接时，当前 prefetch 操作会被丢弃

## dns-prefetch 介绍和使用

*dns-prefetch(DNS 预获取)*是前端网络性能优化的一种措施。它根据浏览器定义的规则，提前解析之后可能会用到的域名，使解析结果缓存到系统缓存中，缩短 DNS 解析时间，进而提高网站的访问速度。

dns 虽然占用不了很多带宽，但是可能产生很高的延迟。

### dns-prefetch 使用

```html
<link rel='dns-prefetch' href="https://baidu.com/"></link>
```

### DNS 缓存获取优先级

当浏览器访问一个域名的时候，需要解析一次 DNS，获得对应域名的 ip 地址。 在解析过程中，按照:

1. 浏览器缓存
2. 系统缓存
3. 路由器缓存
4. ISP(运营商)DNS 缓存
5. 根域名服务器
6. 顶级域名服务器
7. 主域名服务器

### 注意点

1. dns-prefetch 仅对跨域的的域名生效
2. dns-prefetch 可以与 preconnect 搭配使用，将两者结合起来可提供进一步减少跨域请求的感知延迟的机会。如下所示：

   ```html
   <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
   <link rel="dns-prefetch" href="https://fonts.gstatic.com/" />
   ```

3. 如果页面需要建立与许多第三方域的连接，则将它们预先连接会适得其反。 preconnect 提示最好仅用于最关键的连接。对于其他的，只需使用 `<link rel="dns-prefetch"/ >` 即可节省第一步的时间 DNS 查找。

## preconnect 介绍和使用

总所周知，我们与服务器发生通信前会经过 dns 解析和初始化连接和 SSL 连接等步骤，但是 preconnect 能帮助我们提早建立与域的连接

![preconnect](https://blog-1253253332.cos.ap-guangzhou.myqcloud.com/images/preconnect.png)

### preconnect 注意点

1. 通过 preconnect 和别的域建立连接后，_应该尽快的使用它，因为浏览器会关闭所有在 10 秒内未使用的连接。不必要的预连接会延迟其他重要资源，因此要限制 preconnect 连接域的数量_。
2. 需要添加 crossorigin 属性
3. preconnect 的兼容性比 dns-prefetch 的兼容性差一点

### 使用场景

1. 对于媒体播放的优化，比如博客嵌入了 bilibili 的播放器，在未播放前对 preconnect，优化加载速度。
2. 对于资源是哪个域名下的但是不知道是具体哪个资源。
