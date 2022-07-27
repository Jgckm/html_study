
// 导入数据库操作魔铠
const db = require('../db/index')



// 获取用户基本信息的处理函数
exports.getUserInfo =  (req, res) => {
    // 定义查询的用户信息的 SQL 语句
    const sql = 'select id,username,nickname,email,user_pic from ev_users where id=?'
    // 调用 db.query() 执行SQL语句  
    // req.auth.id 是token解析后挂载到
    db.query(sql, req.auth.id, (err,results)=>{
        // 执行SQL语句失败
        if (err) return res.cc(err)
        // 执行SQL语句成功，但是查询结果可能为空
        if(results.length !== 1) return res.cc('获取用户信息失败！')
        console.log(results);
        // 用户获取成功
        res.send({
            status:0,
            data:results
        })
    })
}

// 更新用户基本信息的处理函数
exports.updateUserInfo = (req, res)=>{
    res.send('ok')
}