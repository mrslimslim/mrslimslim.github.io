# Rust数据类型

## 字符串和切片

### 字符串声明写法

```rust
let word = String::from("Hello World");
```

### 字符串切片

```rust
// 直接字面量使用
let str: &str = "Hello World";

let word: String = String::from("Hello World");

let len = word.len();

let hello_str = &word[0..4];
let world_str = &word[6..len];
let hello_world_str = &word[..];
```

### 字符串切片和字符串互相转化

```rust
// 切片转字符串
let hello_world_str = "Hello World";
let hello_world = hello_world_str.toString();

// 字符串转切片
let str: String = String::from("Hello World");
let str_slice1 = str.as_str();
let str_slice2 = &str;
let str_slice3 = &str[..];
```
