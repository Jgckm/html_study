// 导入 express 模块
const bodyParser = require('./14-custom-body-parser');
const express = require('express');
// 创建 express 实例
const app = express();
// 导入 nodejs 内置模块 querystring 模块
const qs = require('querystring');

app.use(bodyParser);
app.post('/user', (req, res) => {
    res.send(req.body);
});
// 调用 app.listen 方法，指定端口好并且启动 web 实例
app.listen(80, () => {
    console.log('Express server running at http://127.0.0.1');
});
