### 安装 then-fs
由于 node.js 官方提供的 fs 模块 仅支持以回调函数的方式读取文件，不支持 Promise 的调用方式。因此，需要先运行如下命令，安装 then-fs 这个第三方包，从而支持我们基于 Promise 的方式读取文件的内容
```
npm install then-fs
```

### 总结
- 我已经将 Promise 整理成一篇文章：https://www.yuque.com/docs/share/17c5719c-38a6-48e7-8ff2-08105699d8b4?# 《Promise》
