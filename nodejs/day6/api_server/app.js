// 导入 express 模块
const express = require('express');
// 创建 express 实例
const app = express();
const cors = require('cors');
// 解决跨域问题
app.use(cors());
// 解析表单数据的中间件 只能解析 这个格式的 application/x-www-form-urlencoded 表单数据
app.use(express.urlencoded({ extended: false }));

// 一定要在路由之前配置解析 token 中间件
const { expressjwt } = require('express-jwt');
const config = require('./schema/config');


// 一定要在路由之前，封装res.cc
app.use((req, res, next) => {
    // status 默认值为 1 表示失败情况
    // err 的值是一个错误对象 也是一个错误描述字符串
    res.cc = function (err, status = 1) {
        res.send({
            status,
            message: err instanceof Error ? err.message : err,
        });
    };
    next();
});

app.use(
    expressjwt({ secret: config.jwtSecretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api/] })
);


// 导入并使用 用户路由
const userRouter = require('./router/user');
app.use('/api', userRouter);

// 导入使用用户信息的模块路由
const userinfoRouter = require('./router/userinfo')
app.use('/my',userinfoRouter)


// 错误级别中间件
app.use((err, req, res, next) => {
    // 验证失败导致的错误
    if (err.name === 'UnauthorizedError') return res.cc('身份验证失败');
    res.cc(err)
});


// 调用 app.listen 方法，指定端口好并且启动 web 实例
app.listen(80, () => {
    console.log('Express server running at http://127.0.0.1');
});
