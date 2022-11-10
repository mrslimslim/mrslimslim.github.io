# TreeShaking 技术

treeShaking代表在构建时，将JavaScript中**未引用**的代码给移除掉。它基于ESModule的语法特性。原因是ESModule是静态的，**依赖关系在编译时就确定了**。

初次之外可以通过某些插件实现CSS的treeShaking

```shell
npm i purgecss-webpack-plugin -D
```

webpack和rollup的treeShaking的区别

webpack的可能由于使用了babel-loader，导致打包后的代码带有副作用，比如处理类函数，无法完美的DCE(dead code elimination)。但是webpack允许我们声明一个模块有无副作用。

* 副作用就是代码运行时所产生的：导致io，改变了其他变量的值等。

rollup支持导出ES模块的包。
他支持程序流分析能更加正确的判断项目本身的代码是否有副作用。我们只要通过rollup打出两份文件，一份umd版，一份ES模块版，它们的路径分别设为main，module的值。这样就能方便使用者进行tree-shaking。
