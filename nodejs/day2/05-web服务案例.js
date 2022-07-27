const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();
server.on('request', (req, res) => {
    const url = req.url;
    // 把url地址映射为具体文件的存放路径
    // const fpath = path.join(__dirname, url);
    let fpath = '';
    if (url === '/') {
        fpath = path.join(__dirname, './test/index.html');
    } else {
        fpath = path.join(__dirname, '/test', url);
    }

    // res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // 根据映射过来的文件路径
    fs.readFile(fpath, 'utf-8', (err, data) => {
        // 如果读取失败 像客户端响应消息
        if (err) return res.end('404 Not Found');
        //读取成功返回数据
        res.end(data);
    });
});

server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
});
