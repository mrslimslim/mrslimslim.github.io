# DNS解析IP

> DSN协议： 网络世界的地址簿

## 为什么要用DNS

网站的数量非常多，如果用IP访问会非常难记住，体验极差
。因此我们需要DNS服务器来帮组我们用语义化更好的域名来帮助我们查到具体的IP地址来访问。

## DNS服务器

DNS服务器在日常生活中非常重要，每个人上网，都需要访问它，但是他出了故障，网络访问会受到很大的影响。
<br/>
因此DNS服务器一定要满足如下特点：

1. 高可用
2. 高并发
3. 分布式

## DNS的结构

* 根DNS服务器：返回顶级域名DNS服务器的IP地址权威DNS服务器的IP地址
* 权威DNS服务器：返回响应主机的IP地址

![](https://blog-1253253332.cos.ap-guangzhou.myqcloud.com/images/dns-struct.webp)

## DNS解析流程

1. 首先查看浏览器是否缓存，未命中则查询hosts是否有设置
2. 电脑客户端会发出一个DNS请求，查询www.qq.com的IP是多少，并发给**本地域名服务器**(本地域名服务器是，如果通过DHCP配置，本地DNS由你的网路服务商ISP，如电信，移动等自动分配，它通常就在你网络服务的某个机房)
3. 本地域名服务器未命中，就会往上找根域名服务器
4. 根DNS收到本地DNS的请求，如果发现后缀是.com，就分配给 .com的顶级域名服务器查询，并给出权威服务器的访问IP
5. 本地域名服务器则查询权威服务器DNS服务器，权威服务则去查询对应qq.com的域名，并将它返回给本地服务器
6. 本地服务器则将IP地址返回给客户端，客户端与目标建立连接

### DNS解析流程图

![](https://blog-1253253332.cos.ap-guangzhou.myqcloud.com/images/dns-working.webp)