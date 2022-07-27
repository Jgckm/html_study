const express = require('express');

const app = express();

// 在这里，调用 express.static() 这个方法，快速对外提供静态资源
// app.use(express.static('public')); // 可以进行多次调用
app.use('/abc', express.static('files')); //   先从 public 里找文件 如果没有文件就往下找
// 挂路径前缀
app.use(express.static('public'));

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
});
