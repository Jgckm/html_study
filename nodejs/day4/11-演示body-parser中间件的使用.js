// 导入 express 模块
const express = require('express');
// 创建 express 实例
const app = express();

// 导入解析表单数据的中间件 body.parser
const parser = require('body-parser');
// 定义中间件
app.use(parser.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: false }));

app.post('/user', (req, res) => {
    // 如果没有配置 表单数据的中间件 req.body 默认是 undefined
    console.log(req.body);
    res.send('ok');
});

// 调用 app.listen 方法，指定端口好并且启动 web 实例
app.listen(80, () => {
    console.log('Express server running at http://127.0.0.1');
});
