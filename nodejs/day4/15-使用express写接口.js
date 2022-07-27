const express = require('express');
const router = require('./16-RouterAPI');

const app = express();

// jsonp一定要配置在 cors 中间之前,配置 JSONP 的接口
app.get('/api/jsonp', (req, res) => {
    // TODO :定义 JSONP 接口具体实现过程
    const funcName = req.query; // 获取函数名称
    const data = { name: '李四', age: 33 }; // 定义发送到客户端的数据对象
    const scriptStr = `$(funcName)($(JSON.stringify(data)))`; // 拼接字符串函数的调用
    res.send(scriptStr);
});

// 一定要在路由之前，配置 cors 这个中间件，从而解决接口跨域问题
const cors = require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use('/api', router);

app.listen(80, () => {
    console.log('http://127.0.0.1');
});
