const express = require('express');

const app = express();

// app.use(express.static('./files'))

// 导入路由模块
const router = require('./03-router');

//  注意：app.use()  函数的作用是 注册全局中间件

// 注册路由事件
// app.use(router);
app.use('/api', router); // 添加前缀

app.listen(80, () => {
    console.log('http://127.0.0.1');
});
