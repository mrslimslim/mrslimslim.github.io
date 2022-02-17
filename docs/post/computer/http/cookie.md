# http中的cookie

### 1. 作用

由于http是无状态协议，cookie 使用来存储,cookie来保存用户的身份信息

### 2. cookie的属性

#### 2.1  HttpOnly

cookie只允许在服务端获取,在客户端无法通过js读取,可以用在防止xss攻击获取用户cookie

#### 2.2  SameSite

value:
Strict 跨站点时任何情况不会发送cookie <br>
Lax <br>
![](http://r7dp9h802.hn-bkt.clouddn.com/same-stie.png)
None 取消限制，但是只能在secure（https开启的条件）下生效 <br>

#### 2.3 path

默认为/,cookie设置同源的属性

#### 2.4 secure

指定cookie只能通过https连接时获取

#### 2.5 Domain

指定cookie在哪些子域下获取，例如让cookie只能在a.test.com上访问，但是在b.test.com上无法获取，可以设置domain: a.test.com

#### 2.6 cookie名称

#### 2.7 cookie值

#### 2.8 Expires

cookie的过期时间

### 向上匹配同源政策

如果用户在test.com上面,只能https访问，由于https是非明文的加密通信方式，用户登录后，我们诱导用户点击链接，链接里面有图片,

```html
<img src="http://sub.test.com"/>
```

这时候我们就获得了一个明文cookie,在domain的向上匹配同源策略,sub.test.com的cookie会更优先

### 如何修改cookie

1. 浏览器端，在非httpOnly下，js直接获取document.domain获取
2. 服务器端，请求通过set-cookie

### withCredentials

这个属性决定，跨域是否携带cookie

### cookie安全

#### CSRF
