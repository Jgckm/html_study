const qs = require('querystring');
const bodyParser = (req, res, next) => {
    // 定义一个 st r字符串 ,专门用来存储客户端发送过来的请求数据
    let str = '';
    // 2,监听 req 的 data
    req.on('data', chunk => {
        str += chunk; // 因为客户端会切割分批次发送数据
    });
    req.on('end', () => {
        // console.log(str);
        const body = qs.parse(str);
        // console.log(body);
        req.body = body;
        next();
        // TODO: 把字符串格式的请求体 转换为 对象格式的请求体
    });
};

module.exports = bodyParser;
