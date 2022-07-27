// 导入 express 模块
const express = require('express');
// 创建 express 实例
const app = express();

// 定义中间件函数
const mw = function (req, res, next) {
    console.log('我调用了中间件函数');
    next();
};

const mw2 = function (req, res, next) {
    console.log('我调用了中间件函数2');
    next();
};

// 创建路由  在第二个参数上直接写 [mw, mw2] 这样写也行
app.get('/', mw, mw2, (req, res) => {
    res.send('home page');
});
app.get('/user', (req, res) => {
    res.send('user page');
});

// 调用 app.listen 方法，指定端口好并且启动 web 实例
app.listen(80, () => {
    console.log('Express server running at http://127.0.0.1');
});
