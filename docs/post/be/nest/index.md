# nestJS学习

基于express
相较于express 设计更完善, Architecture优先

应用基于module，可以按照feature划分module

module 由一个class和一个@module的装饰器表示
// category post auth user等划分

在module中集成 controller和service

service 在controller中处理业务逻辑

prisma 接入流程，来接入 mysql 

dto 判断 body是否符合条件
pipe 工具，数据转换和数据校验

dto + pipe 数据校验

生产密码hash 使用argon2

防止重复注册使用prisma @@map  通过@relation，关联父节点

passportjs.org 查看校验策略
jwt.io 查看jwt的编码过程
