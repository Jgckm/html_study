// 导入 mysql 数据库
const mysql = require('mysql');
// 建立与数据库的链接关系
const db = mysql.createPool({
    host: '127.0.0.1', // 数据库的 ip 地址
    user: 'root', // 登录数据库的账号
    password: 'admin123', // 登录数据库的密码
    database: 'my_db_01', // 指定操作那个数据库
});

// 测试 mysql 模块是否正常工作
// db.query('select 1', (err, result) => {
//     // MySQL 模块工作期间报错了
//     if (err) return console.log(err.message);
//     // 能够成功的执行 SQL 语句
//     console.log(result);
// });

// 查询 users 表中的所有数据
// const sqlStr = 'select * from users';
// db.query(sqlStr, (err, result) => {
//     // 查询数据是失败
//     if (err) return console.log(err.message);
//     // 查询数据成功
//     // 注意：如果执行的是 select 查询语句，则执行结果是数组
//     console.log(result);
// });

// 插入数据
// const user = { username: 'Spidre-man', password: 'pcc123' };
// // 定义SQL语句
// const qslStr = 'insert into users (username,password) values (?, ?)';

// db.query(qslStr, [user.username, user.password], (err, result) => {
//     // 执行 SQL 执行语句失败了
//     if (err) return console.log(err.message);
//     // 成功了
//     // 注意：如果执行的是 insert into 插入语句，则 result 是一个对象
//     // 可以通过 affectedRows 属性，来判断是否插入数据成功
//     if (result.affectedRows === 1) {
//         console.log('插入数据成功！');
//     }
// });

// 演示插入数据的便捷方式
// const user = { username: 'Spider-Man2', password: 'pcc4321' };
// const qslStr = 'insert into users set ?';

// db.query(qslStr, user, (err, result) => {
//     if (err) return console.log(err.message);
//     if (result.affectedRows === 1) {
//         console.log('插入数据成功');
//     }
// });

// 演示如何更新用户数据的信息
// const user = { id: 5, username: 'aaa', password: '000' };
// const qslStr = 'update users set username=?,password=? where id=?';

// db.query(qslStr, [user.username, user.password, user.id], (err, results) => {
//     if (err) return console.log(err.message);
//     //  注意 ：执行了 update 语句之后，执行的结果也是一个对象 affectedRows 判断是否更新成功
//     if (results.affectedRows === 1) {
//         console.log('数据更新成功！');
//     }
// });

// 演示更新数据的便捷方式
// const user = { id: 5, username: 'aaaa', password: '000000' };
// const sqlStr = 'update users set ? where id=?';

// db.query(sqlStr, [user, user.id], (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) {
//         console.log('数据更新成功');
//     }
// });

// 删除id 为5 的用户
// const qslStr = 'delete from users where id=?';
// db.query(qslStr, 5, (err, results) => {
//     if (err) return console.log(err);
//     if (results.affectedRows === 1) {
//         console.log('删除成功');
//     }
// });

// 标记删除
const sqlStr = 'update users set status=? where id=?';
db.query(sqlStr, [1, 4], (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) {
        console.log('标记删除成功');
    }
});
