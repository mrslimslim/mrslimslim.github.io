# JavaScript的原型链
<!-- 待归档 -->
<!-- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain -->
```js
const  o = new Foo();
```

```js
var o = new Object();
o.__proto__ = Foo.prototype;
Foo.call();
```
