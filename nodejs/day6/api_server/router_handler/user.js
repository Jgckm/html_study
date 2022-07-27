const db = require('../db/index');
// 导入bcrypt.js
const bcrypt = require('bcryptjs');
// 导入生成 token的包
const jwt = require('jsonwebtoken');
// 导入全局配置文件
const config = require('../schema/config');



// 注册新用户
exports.regUser = (req, res) => {
    // 获取客户端提交到的服务器的用户信息
    const userinfo = req.body;
    if (!userinfo.username || !userinfo.password) {
        res.send({ status: 1, msg: '用户名或密码不合法' });
    }

    // 定义sql语句判断用户名是否被占用
    const sqlStr = 'select * from ev_users where username=?';
    db.query(sqlStr, userinfo.username, (err, result) => {
        if (err) {
            // return res.send({ status: 1, msessage: err.message });
            return res.cc(err);
        }
        if (result.length > 0) {
            // return res.send({ status: 1, message: '用户名被占用，请更换其他用户名！' });
            return res.cc('用户名被占用，请更换其他用户名！');
        }
        // 定义插入新用户的 SQL 语句
        const sql = 'insert into ev_users set ?';
        // 调用 bcrypt.hashSync() 对密码进行加密
        userinfo.password = bcrypt.hashSync(userinfo.password, 10);
        db.query(
            sql,
            { username: userinfo.username, password: userinfo.password },
            (err, result) => {
                // if (err) return res.send({status:1, message:err.message});
                if (err) return res.cc(err);
                // 判断行数是否为 1
                // if (result.affectedRows != 1) return res.rend({status:1,message:'注册用户失败，稍后再试'})
                if (result.affectedRows != 1) return res.cc('注册用户失败，稍后再试');

                // 注册成功
                // res.send({status:0,message:'注册成功'})
                res.cc('注册成功', 0);
            }
        );
    });
};

// 登录处理函数
exports.login = (req, res) => {
    // 接收到的表单数据
    const userinfo = req.body;
    // 定义SQL语句
    const sql = 'select * from ev_users where username=?';
    db.query(sql, userinfo.username, function (err, results) {
        // 执行 SQL 语句失败
        if (err) return res.cc(err);
        // 执行 SQL 语句成功，但是查询到数据条数不等于 1
        if (results.length !== 1) return res.cc('登录失败！');
        // TODO：判断用户输入的登录密码是否和数据库中的密码一致
        /**
         * 第一个参数是 用户输入的密码
         * 第二个参数是 数据库存储的的密码
         */
        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password);
        if (!compareResult) return res.cc('登录失败！');
        // 在服务端生成 token 字符串
        const user = { ...results[0], password: '', userpic: '' };
        // 对用户信息进行加密，生成 token 字符串
        const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn });

        // 将token发送给客户端
        res.send({
            status: 0,
            message: '登录成功！',
            token: 'Bearer '+tokenStr,
        });
    });
};
