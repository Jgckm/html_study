const fs = require('fs');

// fs.readFile('./files/1.txt', 'utf-8', function (err, data) {
//     if (err) {
//         return console.log('读取错误');
//     }
//     console.log('读取成功' + data);
// });

// 移植性非常差 不利于维护
// fs.readFile(
//     'C:\\Users\\Administrator\\Desktop\\nodejs\\files\\成绩.txt',
//     'utf-8',
//     function (err, data) {
//         if (err) {
//             return console.log('读取错误');
//         }
//         console.log('读取成功' + data);
//     }
// );

// __dirname 表示当前文件所处的目录

// console.log(__dirname);
fs.readFile(__dirname + '/files/1.txt', 'utf-8', function (err, data) {
    if (err) {
        return console.log('读取错误');
    }
    console.log('读取成功' + data);
});
