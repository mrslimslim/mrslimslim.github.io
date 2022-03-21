# babylon介绍

### 1. 什么是babylon?

Babylon是一款Web3D引擎，允许把Javascript和OpenGL ES2.0相结合，提供硬件3D加速渲染，同一套代码同一套模型就可以在多个平台上达到画面的高度一致，是一款可以让UI只专注于模型设计，让程序只专注于代码编写的引擎。自带的多款所见即所得的辅助工具更是可以让美术和程序减少沟通成本，提升项目的开发效率.

### 2. babylon.js对比three的优势

* 文档详细，支持Typescript，适合做大型项目
* 功能丰富，文档详细。强大的3D游戏引擎
* 大厂背书，微软维护
* API高度封装，可操作空间小，减少过分自由而产生坑的可能
* 版本稳定

### 3. 起步

#### 3.1 web3D 构建三要素

* 摄像机 Camera
* 场景 Scene
* 渲染引擎 Engine

#### 3.2 初始化

__获取挂载DOM节点__

```ts
const canvas: HTMLCanvasElement = document.querySelector('#canvas');
canvas.width = window.innerHeight;
canvas.width = window.innerWidth;
```

__初始化babylon引擎__

```ts
// 第一个为挂载的DOM， 第二个参数为是否开启抗锯齿
const engine = new BABYLON.Engine(canvas,true),
scene = new BABYLON.Scene(engine),
// 第1个参数定义相机的名称，
// 第2个参数定义相机沿y轴的旋转弧度
// 第3个参数定义相机沿x轴的旋转弧度
// 第4个参数 radius定义距离目标的距离
// 第5个参数target是相机看的点目标
// 第6个参数scene是场景
camera = new BABYLON.ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2, 2,new BABYLON.Vector3(0,0,0),scene);
```
