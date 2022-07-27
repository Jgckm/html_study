const mysql = require('mysql');

const db = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    database: 'my_db_01',
    user: 'root',
    password: 'admin123',
});


module.exports = db