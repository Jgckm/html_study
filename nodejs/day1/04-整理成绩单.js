const fs = require('fs');

fs.readFile('./files/成绩.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log('读取失败' + err.message);
    }
    // console.log(data);

    const arrOld = data.split(' ');
    const arrNew = [];
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', '：'));
    });
    const newStr = arrNew.join('\t\n');

    fs.writeFile('./files/成绩ok.txt', newStr, function (err) {
        if (err) {
            return console.log('写入失败');
        }
        console.log('写入成功！！');
    });
});
