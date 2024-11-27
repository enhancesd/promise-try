# Promise.try Polyfill
## 示例
```js
// entry js
import '@emeji/promise-try';
// or
require('@emeji/promise-try')
```
### 使用 Promise.try()
- 下面的示例接受一个回调函数，将其“提升”为一个 promise，处理结果，并进行一些错误处理：
```js
function doSomething(action: (...args: any) => void) {
    return Promise.try(action, 1, 2, 3, 4, 5)
        .then((result) => console.log(result))
        .catch((error) => console.error(error))
        .finally(() => console.log("完成"));
}
doSomething((...args) => {
    console.log('a', args);
    return  "同步的结果";
});

doSomething(() => {
    throw new Error("同步的错误");
});
console.log('b')
doSomething(async () => "异步的结果");

doSomething(async () => {
    throw new Error("异步的错误");
});
```