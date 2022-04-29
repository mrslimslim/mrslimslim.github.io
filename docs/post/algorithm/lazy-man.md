# Lazyman算法

## 题目说明 & 示例

> LazyMan('Tony'); <br/>
> // Hi I am Tony<br/>
> <br/>
> LazyMan('Tony').sleep(10).eat('lunch'); <br/>
> // Hi I am Tony<br/>
> // 等待了10秒...<br/>
> // I am eating lunch<br/>
> <br/>
> LazyMan('Tony').eat('lunch').sleep(10).eat('dinner'); <br/>
> // Hi I am Tony<br/>
> // I am eating lunch<br/>
> // 等待了10秒...<br/>
> // I am eating diner<br/>
> <br/>
> LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food'); <br/>
> // Hi I am Tony<br/>
> // 等待了5秒...<br/>
> // I am eating lunch<br/>
> // I am eating dinner<br/>
> // 等待了10秒...<br/>
> // I am eating junk food<br/>

## 解题思路

1. 由闭包组成的任务队列
2. setTimeout 宏任务 执行顺序
3. 任务队列控制执行顺序
4. IIFE(Immediately Invoke Fucntion Expression)结合闭包保存传参

## 代码实现

```js
class LazyManClass {
    constructor(name){
        this.taskList = [];
        console.log('I am ' + name);
        setTimeout(()=>{
            this.next();
        })
        return this;
    }

    eat(food){
        const fn = ((n)=>{
            return ()=>{
                console.log('I am eat ' + n);
                this.next();
            }
        })(food);
        this.taskList.push(fn);
        return this;
    }

    sleep(duration){
        const fn = ((n)=>{
            return ()=>{
               setTimeout(()=>{
                   console.log('I am sleeping ' +  n + ' ms');
                    this.next();
               }, n)
            }
        })(duration);
        this.taskList.push(fn);
        return this;
    }

    sleepFirst(duration){
        const fn = ((n)=>{
           return ()=>{
               setTimeout(()=>{
                   console.log('I am sleeping ' +  n + ' ms');
                    this.next();
               }, n)
            }
        })(duration);
        this.taskList.unshift(fn);
        return this;
    }

    next(){
        const fn = this.taskList.shift();
        fn && fn();
    }
} 
```
