# React优先级调度算法

## 调度过程

执行动作 -> 调度流程 -> 更新流程

时间切片，调度器, 通过priority任务优先级，来异步实现任务的调度

任务可中断  

分帧处理