const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('这是第 1 个全局中间件');

    next();
});
app.use((req, res, next) => {
    console.log('这是第 2 个全局中间件');
    next();
});
app.use((req, res, next) => {
    console.log('这是第 3 个全局中间件');
});

// 定义了一个路由
app.get('/', (req, res) => {});

app.listen(80, () => {
    console.log('http://127.0.0.1');
});
