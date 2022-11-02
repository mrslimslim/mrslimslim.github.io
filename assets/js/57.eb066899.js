(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{415:function(t,_,v){"use strict";v.r(_);var s=v(44),r=Object(s.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"浏览器架构认识"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器架构认识"}},[t._v("#")]),t._v(" 浏览器架构认识")]),t._v(" "),v("h2",{attrs:{id:"进程和线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程"}},[t._v("#")]),t._v(" 进程和线程")]),t._v(" "),v("p",[t._v("进程是一个程序的运行实例，启动一个程序的时候，操作系统会为该程序创建一块"),v("strong",[t._v("内存")]),t._v("，用来存放"),v("strong",[t._v("代码")]),t._v("和一个执行任务的"),v("strong",[t._v("主线程")]),t._v("，我们把这样的一个运行环境叫"),v("strong",[t._v("进程")]),t._v("。进程就像一个"),v("strong",[t._v("工厂")]),t._v("，内存是"),v("strong",[t._v("占地面积")]),t._v("，线程就像一个个"),v("strong",[t._v("流水线")]),t._v("。")]),t._v(" "),v("p",[t._v("总的来说，进程和线程之间有一下4个特点：")]),t._v(" "),v("ol",[v("li",[t._v("进程中的任意一线程执行出错，都会导致整个进程的崩溃。")]),t._v(" "),v("li",[t._v("线程之间共享进程中的数据。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-1253253332.cos.ap-guangzhou.myqcloud.com/images/process_share.webp",alt:"线程之间共享进程中的数"}}),t._v("\n3. 当一个进程关闭之后，操作系统会回收所占用的内存。\n4. 进程之间的内容相互隔离。")]),t._v(" "),v("h2",{attrs:{id:"浏览器的多进程架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的多进程架构"}},[t._v("#")]),t._v(" 浏览器的多进程架构")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-1253253332.cos.ap-guangzhou.myqcloud.com/images/mutil_process_browers.webp",alt:"Chrome进程架构图"}})]),t._v(" "),v("p",[t._v("进程说明：")]),t._v(" "),v("ul",[v("li",[t._v("浏览器进程：主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。")]),t._v(" "),v("li",[t._v("渲染进程： 核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页，排版引擎 Blink 和 JavaScript 引擎 V8 都是运行在该进程中，"),v("strong",[t._v("默认情况下，Chrome 会为每个 Tab 标签创建一个渲染进程")]),t._v("。出于安全考虑，渲染进程都是"),v("strong",[t._v("运行在沙箱模式")]),t._v("下。")]),t._v(" "),v("li",[t._v("GPU进程: 其实，Chrome 刚开始发布的时候是没有 GPU 进程的。"),v("strong",[t._v("而 GPU 的使用初衷是为了实现 3D CSS 的效果，只是随后网页、Chrome 的 UI 界面都选择采用 GPU 来绘制")]),t._v("，这使得 GPU 成为浏览器普遍的需求。最后，Chrome 在其多进程架构上也引入了 GPU 进程。")]),t._v(" "),v("li",[t._v("网络进程。主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面的，直至最近才独立出来，成为一个单独的进程。")]),t._v(" "),v("li",[t._v("插件进程。主要是负责插件的运行，"),v("strong",[t._v("因插件易崩溃，所以需要通过插件进程来隔离")]),t._v("，以保证插件进程崩溃不会对浏览器和页面造成影响。")])])])}),[],!1,null,null,null);_.default=r.exports}}]);