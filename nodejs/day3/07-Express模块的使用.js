// 导入模块
const express = require('express');

// 创建服务器
const app = express();

// 监听客户端的 get 和 post 请求 并向客户端响应具体数据的内容
app.get('/user', (req, res) => {
    res.send({ uname: '李华', age: 30, gender: '男' });
});

app.post('/user', (req, res) => {
    app.send('请求成功！');
});

app.get('/', (req, res) => {
    // 通过 req.qurey()  // {"ut":"333"} 返回一个对象
    console.log(req.query);
    res.send(req.query);
});

// id 是可以写成任何变量的 动态参数
app.get('/user/:id/:name', (req, res) => {
    // req.params  是动态匹配到的 URL 参数
    console.log(req.params); // {"id":"ww","name":"zms"}
    res.send(req.params);
});

// 启动服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
});
