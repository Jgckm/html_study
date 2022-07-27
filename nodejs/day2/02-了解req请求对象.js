// 1.导入模块
const http = require('http');

// 2.实例
const server = http.createServer();

// req 是请求对象 包含了与客户端相关的数据和属性
// 3.绑定 request 事件
server.on('request', (req, res) => {
    // req.url = 是客户端请求地址
    const url = req.url;
    // req.method 是客户端请求的 method 类型
    const method = req.method;
    const str = `Your request url is ${url}, and request method is ${method}`;
    console.log(str);
    // 通过 res.end() 方法 向客户端响应一些任务内容
    res.end(str);
});
server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
});
