// 导入 express 模块
const { json } = require('body-parser');
const express = require('express');
// 创建 express 实例
const app = express();
// 导入 nodejs 内置模块 querystring 模块
const qs = require('querystring');

app.use((req, res, next) => {
    // 定义一个 st r字符串 ,专门用来存储客户端发送过来的请求数据
    let str = '';
    // 2,监听 req 的 data
    req.on('data', chunk => {
        str += chunk; // 因为客户端会切割分批次发送数据
    });
    req.on('end', () => {
        // console.log(str);
        const body = qs.parse(str);
        // console.log(body);
        req.body = body;
        next();
        // TODO: 把字符串格式的请求体 转换为 对象格式的请求体
    });
});
app.post('/user', (req, res) => {
    res.send(req.body);
});
// 调用 app.listen 方法，指定端口好并且启动 web 实例
app.listen(80, () => {
    console.log('Express server running at http://127.0.0.1');
});
