# 浏览器架构认识

## 进程和线程

进程是一个程序的运行实例，启动一个程序的时候，操作系统会为该程序创建一块**内存**，用来存放**代码**和一个执行任务的**主线程**，我们把这样的一个运行环境叫**进程**。进程就像一个**工厂**，内存是**占地面积**，线程就像一个个**流水线**。  

总的来说，进程和线程之间有一下4个特点：

1. 进程中的任意一线程执行出错，都会导致整个进程的崩溃。
2. 线程之间共享进程中的数据。
  
![线程之间共享进程中的数](https://blog-1253253332.cos.ap-guangzhou.myqcloud.com/images/process_share.webp)
3. 当一个进程关闭之后，操作系统会回收所占用的内存。
4. 进程之间的内容相互隔离。

## 浏览器的多进程架构

![Chrome进程架构图](https://blog-1253253332.cos.ap-guangzhou.myqcloud.com/images/mutil_process_browers.webp)

进程说明：

- 浏览器进程：主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。  
- 渲染进程： 核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页，排版引擎 Blink 和 JavaScript 引擎 V8 都是运行在该进程中，**默认情况下，Chrome 会为每个 Tab 标签创建一个渲染进程**。出于安全考虑，渲染进程都是**运行在沙箱模式**下。
- GPU进程: 其实，Chrome 刚开始发布的时候是没有 GPU 进程的。**而 GPU 的使用初衷是为了实现 3D CSS 的效果，只是随后网页、Chrome 的 UI 界面都选择采用 GPU 来绘制**，这使得 GPU 成为浏览器普遍的需求。最后，Chrome 在其多进程架构上也引入了 GPU 进程。
- 网络进程。主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面的，直至最近才独立出来，成为一个单独的进程。
- 插件进程。主要是负责插件的运行，**因插件易崩溃，所以需要通过插件进程来隔离**，以保证插件进程崩溃不会对浏览器和页面造成影响。
