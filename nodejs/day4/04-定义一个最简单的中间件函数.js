const express = require('express');

const app = express();

// 定义一个最简单的中间件函数

// const mw = function (req, res, next) {
//     console.log('这是一个最简单的中间件函数');
//     // 把流转关系，交换给下一个中间件或路由
//     next();
// };

// 将mw 注册为全局中间件
// app.use(mw);
// 简化形式 定义中间件
app.use((req, res, next) => {
    console.log('这是一个最简单的中间件函数');
    // 把流转关系，交换给下一个中间件或路由
    next();
});

app.get('/', (req, res) => {
    res.send('Hello page');
});

app.get('/user', (req, res) => {
    res.send('Hello user');
});

app.listen(80, () => {
    console.log('http://127.0.0.1');
});
