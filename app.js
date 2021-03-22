const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = require('./router')
    // 挂载路由
app.use(router)
    // 开放静态资源
app.use('/public', express.static('public'));


app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('服务器启动成功,3000')
    }
})