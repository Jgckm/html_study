const fs = require('fs');

fs.readFile('./files/1.clstxt', 'utf8', function (err, data) {
    if (err) {
        return console.log(`读取文件失败` + err.message);
    } else {
        console.log(data);
    }
});
