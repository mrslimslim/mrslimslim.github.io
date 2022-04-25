# 责任链

## 代码质量评价

> 灵活性（flexibility）、可扩展性（extensibility）、可维护性（maintainability）、可读性（readability）、可理解性（understandability）、易修改性（changeability）、可复用（reusability）、可测试性（testability）、模块化（modularity）、高内聚低耦合（high cohesion loose coupling）、高效（high effciency）、高性能（high performance）、安全性（security）、兼容性（compatibility）、易用性（usability）、整洁（clean）、清晰（clarity）、简单（simple）、直接（straightforward）、少即是多（less code is more）、文档详尽（well-documented）、分层清晰（well-layered）、正确性（correctness、bug free）、健壮性（robustness）、鲁棒性（robustness）、可用性（reliability）、可伸缩性（scalability）、稳定性（stability）、优雅（elegant）、好（good）、坏（bad）……

## 设计原则

01. 单一职责
02. 开放封闭:  在设计一个模块时，应当使得这个模块可以在不被修改的前提下被扩展(这就要求我们不能在一个类中写死所有的功能)。 可扩展
