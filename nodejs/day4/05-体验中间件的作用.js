const express = require('express');

const app = express();

// 定义一个最简单的中间件函数

// 简化形式 定义中间件
app.use((req, res, next) => {
    const time = Date.now();
    req.starTime = time;
    next();
});

app.get('/', (req, res) => {
    res.send('Hello page' + req.starTime);
});

app.get('/user', (req, res) => {
    res.send('Hello user', +req.starTime);
});

app.listen(80, () => {
    console.log('http://127.0.0.1');
});
