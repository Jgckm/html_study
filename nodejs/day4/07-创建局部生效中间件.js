// 导入 express 模块
const express = require('express');
// 创建 express 实例
const app = express();

// 定义中间件函数
const mw = function (req, res, next) {
    console.log('我调用了中间件函数');
    next();
};

// 创建路由
app.get('/', mw, (req, res) => {
    res.send('home page');
});
app.get('/user', (req, res) => {
    res.send('user page');
});

// 调用 app.listen 方法，指定端口好并且启动 web 实例
app.listen(80, () => {
    console.log('Express server running at http://127.0.0.1');
});
