# http安全

### CSRF攻击

#### 说明

全称是Cross Site Request forgery，跨站点请求伪造。通过社会工程学，让用户访问攻击者的网站，然后向攻击网站比如银行网站，由于这时候用户已经登录，这时候攻击者可以拿到用户的身份信息cookie，然后伪造用户的操作信息，发送恶意请求。

### 流程

1. 用户登录bank.com
2. 社工诱导用户点击jxxx.com
3. 在jxxx.com,弹出一张图片 ，图片链接bank.com/getMoney?amount=100000，这时候jxxx.com已经拥有被害者的登录信息
4. bank.com在收到在jxxx.com的请求后，验证了是受害者的身份，然后实施操作
5. 攻击完成，受害者gg

### 防护措施

#### 客户端

csrf token，请求必须带上加密的token,token不要通过cookie传给用户

#### 服务端

校验refer header和orign header，判断当前发送请求的页面是否为可信的站点
