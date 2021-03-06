const mysql = require('mysql')
const config = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'xmstore',
    acquireTimeout: 15000, // 连接超时时间
    connectionLimit: 50, // 最大连接数
    waitForConnections: true, // 超过最大连接时排队
    queueLimit: 50, // 排队最大数量(0 代表不做限制)
}
module.exports = {
    request: function(op, value) {
        var connection = mysql.createConnection(config)
        return new Promise((resolve, reject, pending) => {
            connection.connect();
            connection.query(op, value, function(error, results, fields) {
                if (error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            })
            connection.end();
        })
    }
}