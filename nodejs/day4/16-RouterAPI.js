const express = require('express');

const router = express.Router();

router.get('/get', (req, res) => {
    // 通过 req.query 获取客户端
    const query = req.query;
    // 通过 req.send() 方法向客户端 响应处理结果
    res.send({
        status: 0, // 0 表示处理成功 1 表示处理失败
        msg: 'GET 请求成功',
        data: query,
    });
});

router.post('/post', (req, res) => {
    // 通过 req.body 来获取请求中包含的 url-encoded 格式的数据
    const body = req.body;
    res.send({
        stauts: 0,
        msg: 'POST 请求成功',
        data: body,
    });
});

router.delete('/delete', (req, res) => {
    res.send({
        status: 0,
        msg: 'DELETE请求成功',
    });
});

module.exports = router;
