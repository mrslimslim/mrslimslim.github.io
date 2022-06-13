# 前端模块化 CommonJS, UMD, ESM

## 1. 模块化

### 1.1 CommonJS

#### 介绍

__CommonJS__ 是nodejs的文件模块标准，模块的引入主要是通过require来实现，模块的导出是通过module.exports(或exports较少使用)，global

#### 如何加载

__CommonJS__ 输出的是值的拷贝

#### 值的输出

#### 循环加载

CommonJS模块的重要特性是__加载时执行，即脚本代码在require的时候，就会全部执行__。CommonJS的做法是，一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。

##### 具体规则如下

1. A和B两个文件互相依赖
2. A先被执行require('A'),在A中执行了require('B')
3. 那么在B中即使是require('A'),也会跳过执行
4. 直到B模块执行完毕，然后回到A模块继续执行

__官方文档说明__： <https://nodejs.org/api/modules.html#modules_cycles>
