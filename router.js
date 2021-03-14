const express = require('express')
const data = require('./data')
const router = express.Router()

router.get('/product/xiaomi', (request, response, next) => {
    let begin = [Number(request.query.begin), Number(request.query.ending)]
    console.log(begin)
    let P = data.request(begin)
    P.then((resolve) => {
            response.json({
                status: 1,
                msg: 'The request is ok',
                data: resolve
            })
        },
        (reject) => {
            response.json({
                status: 0,
                msg: 'ending is NaN',
            })
        }
    )
})



module.exports = router