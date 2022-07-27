const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    // 1.获取请求的 url 地址
    const url = req.url;
    // 2.设置默认的响应内容 为 404 not fund
    let content = '<h1>404 Not found</h1>';
    // 3.判断用户请求的是否为  / 或者 /index.html
    // 4.判断用户请求的是否为 /about.html
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>';
    } else if (url === '/about.html') {
        content = '<h1>关于</h1>';
    }

    // 5.设置 ontent-Type 响应头
    res.setHeader('Content-Type', 'text/html; charset=utf8');
    // 6.使用 res.end() 把内容响应给客户端
    res.end(content);
});
server.listen(80, () => {
    console.log('server runnig at http://127.0.0.1');
});
