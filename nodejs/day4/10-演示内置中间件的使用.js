const express = require('express');
const app = express();

// 配置中间件 除了 错误中间件 其他中间件都写在 路由之前
// 通过 express.json() 来解析 表单中的 json 数据
app.use(express.json());
// 通过express.urlencoded 这个中间件    来解析表单中的 url-encoded 格式的数据
app.use(express.urlencoded({ extended: false }));

app.post('/user', (req, res) => {
    // 在服务器可以使用 req.body 来获取客户端发送过来的请求数据
    // 默认情况下，如果不配置解析表达单的中间件，则req.body 默认等于 undefined
    console.log(req.body);
    res.send('ok');
});

app.post('/book', (req, res) => {
    console.log(req.body);
    res.send('ok');
});

app.listen(80, () => {
    console.log('http://127.0.0.1');
});
