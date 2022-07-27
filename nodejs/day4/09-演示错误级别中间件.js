// 导入 express 模块
const express = require('express');
// 创建 express 实例
const app = express();

// 创建一个路由
app.get('/', (req, res) => {
    throw new Error('发生了错误');
    res.send('home page');
});

// 创建错误级别中间件
app.use((err, req, res, next) => {
    console.log('服务器发生错误！' + err.message);
    res.send('Error：' + err.message);
});

// 调用 app.listen 方法，指定端口好并且启动 web 实例
app.listen(80, () => {
    console.log('Express server running at http://127.0.0.1');
});
