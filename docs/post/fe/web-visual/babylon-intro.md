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

### 3.2 坐标轴

Babylon.js不同于Three使用的笛卡尔左手坐标系

### 3.3 初始化

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

### 3.4 神说：要有光

Babylon中创建灯光

#### 3.4.1 HemisphericLight 半球光

> HemisphericLight模拟周围环境光，所以传递的方向是光反射的方向，而不是传入的方向

```ts
new BABYLON.HemisphericLight('lightName',new BABYLON.Vector3(0, 1, 0), scene);
```

#### 3.4.2 DirectionLight 平衡光

#### 3.4.3 SpotLight 聚光灯(车灯)

### 3.5 创建几何体

常用几何体的类型以及对应的api包含:

1. 123
2. 234
3. 456

```ts
```

### 3.6 纹理的使用

#### 3.6.1 普通使用

```js
// 简单纹理
const groundMat = new BABYLON.StandardMaterial("groundMaterial", scene);

groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0);

ground.material = groundMat;

// 图片纹理
const boxMat = new BABYLON.StandardMaterial('boxMaterial', scene);
boxMat.diffuseTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/floor.png", scene);

box.material = boxMat;
```

#### 3.6.2 纹理坐标（uv坐标）

> 纹理设置，只要知道这个坐标系的左下角为 0,0，右上角为 1,1 就可以了。
![uv axis](https://blog-1253253332.cos.ap-guangzhou.myqcloud.com/imagesuv_axis.png)

> 在faceUV 面数组中，不同的索引代表不同的面，0 代表背面，1代表正面，2代表右面，3代表左面，4
> 代表上面，5代表下面
<br>
> 如果faceUV有三个对象(圆柱体)，则0 代表顶部，1代表底部， 2代表柱面

```js
        const faceUV = [];
      
        // 在faceUV 面数组中，不同的索引代表不同的面，0 代表背面，1代表正面，2代表右面，3代表左面，4代表上面，5代表下面
        // 0 代表背面
        faceUV[0] = new BABYLON.Vector4(0.5, 0.0 , 0.75, 1.0);
        // 1 代表正面
        faceUV[1] = new BABYLON.Vector4(0.0, 0.0 , 0.25, 1.0);
        // 2 代表右侧
        faceUV[2] = new BABYLON.Vector4(0.25, 0.0 , 0.5, 1.0);
        // 3 代表左侧
        faceUV[3] = new BABYLON.Vector4(0.75, 0.0 , 1, 1.0);
 
        const box = BABYLON.MeshBuilder.CreateBox('box', {
            faceUV,
            wrap: true
        } ,scene);

        // 如果faceUV有三个对象(圆柱体)，则0 代表顶部，1代表底部， 2代表柱面
```
