const express = require('express');

const app = express();

// 配置中间件
const session = require('express-session');

// 托管静态页面
app.get(express.static('/pages'));
app.use(
    session({
        secret: 'jgckM', // 随便写
        resave: false, // 固定写法
        saveUninitialized: true, // 固定写法
    })
);
// req.session 可以访问设置的session 对象
// 将登陆后的用户信息存储在 session 中
app.post('/api/login', (req, res) => {
    if (req.body.username !== 'admin' || req.body.password !== '123456') {
        return res.send({ status: 1, msa: '登录失败' });
    }

    // 只有成功配置了 express-session 才可以访问 session 这个属性
    req.session.user = req.body; // 用户的信息
    req.session.islogin = true; //用户的登录状态
    res.send({ status: 0, msg: '登录成功' });
});

app.get('./get', (req, res) => {
    // 从session中获取用户的名称，并响应给客户端
    if (!req.session.islogin) {
        return res.send({ status: 1, msg: 'fail' });
    }
    res.send({
        status: 0,
        msg: 'success',
        username: req.session.username,
    });
});

// 退出登录接口
app.post('/api/logout', (req, res) => {
    // 清空session信息
    req.session.destroy();
    res.send({ status: 0, msg: '退出登录成功' });
});

app.listen(80, () => {
    console.log('http://127.0.0.1/');
});
