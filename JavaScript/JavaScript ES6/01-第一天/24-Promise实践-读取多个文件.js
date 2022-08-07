// 引入 fs 模块
const { rejects } = require('assert');
const fs = require('fs');

// fs.readFile('./resources/为学.md', (err1, data1) => {
//     fs.readFile('./resources/观书有感.md', (err2, data2) => {
//         fs.readFile('./resources/小儿垂钓.md', (err3, data3) => {
//             let result = data1 + data2 + data3;
//             console.log(result);
//         });
//     });
// });

// 使用 Promise 读取文件

const p = new Promise((resolve, reject) => {
    fs.readFile('./resources/为学.md', (err, data) => {
        resolve(data);
    });
});

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/观书有感.md', (err, data) => {
            resolve([value, data]);
        });
    });
})
    .then(value => {
        return new Promise((resolve, reject) => {
            fs.readFile('./resources/小儿垂钓.md', (err, data) => {
                value.push(data);
                resolve(value);
            });
        });
    })
    .then(value => {
        console.log(value.join('\r\n'));
    });
