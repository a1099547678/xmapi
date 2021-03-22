const { response } = require('express')
const express = require('express')
const { request } = require('./data')
const data = require('./data')
const router = express.Router()

// 统一设置请求头 cors跨域
router.all('*', (request, response, next) => {
        response.set({
            "Access-Control-Allow-Origin": "http://localhost:8080",
            "Access-Control-Allow-Credentials": true
        })
        next()
    })
    // 小米手机
router.get('/product/xiaomi', (request, response, next) => {
        let begin = [Number(request.query.begin), Number(request.query.ending)]
        console.log(begin)
        let op = 'SELECT * FROM xmphone limit ?,?'
        let P = data.request(op, begin)
        P.then((resolve) => {
                response.json({
                    status: 1,
                    msg: 'The request is ok',
                    data: resolve
                })
            },
            (reject) => {
                next(reject)
            }
        )
    })
    // 红米手机
router.get('/product/redmi', (request, response, next) => {
        let begin = [Number(request.query.begin), Number(request.query.ending)]
        console.log(begin)
        let op = 'SELECT * FROM redmiphone limit ?,?'
        let P = data.request(op, begin)
        P.then((resolve) => {
                response.json({
                    status: 1,
                    msg: 'The request is ok',
                    data: resolve
                })
            },
            (reject) => {
                next(reject)
            }
        )
    })
    // 电视
router.get('/product/television', (request, response, next) => {
    let begin = [Number(request.query.begin), Number(request.query.ending)]
    console.log(begin)
    let op = 'SELECT * FROM television limit ?,?'
    let P = data.request(op, begin)
    P.then((resolve) => {
            response.json({
                status: 1,
                msg: 'The request is ok',
                data: resolve
            })
        },
        (reject) => {
            next(reject)
        }
    )
})

// 笔记本
router.get('/product/jotter', (request, response, next) => {
        let begin = [Number(request.query.begin), Number(request.query.ending)]
        console.log(begin)
        let op = 'SELECT * FROM jotter limit ?,?'
        let P = data.request(op, begin)
        P.then((resolve) => {
                response.json({
                    status: 1,
                    msg: 'The request is ok',
                    data: resolve
                })
            },
            (reject) => {
                next(reject)
            }
        )
    })
    // 家电
router.get('/product/appliances', (request, response, next) => {
        let begin = [Number(request.query.begin), Number(request.query.ending)]
        console.log(begin)
        let op = 'SELECT * FROM appliances limit ?,?'
        let P = data.request(op, begin)
        P.then((resolve) => {
                response.json({
                    status: 1,
                    msg: 'The request is ok',
                    data: resolve
                })
            },
            (reject) => {
                next(reject)
            }
        )
    })
    // wifi
router.get('/product/wifi', (request, response, next) => {
        let begin = [Number(request.query.begin), Number(request.query.ending)]
        console.log(begin)
        let op = 'SELECT * FROM wifi limit ?,?'
        let P = data.request(op, begin)
        P.then((resolve) => {
                response.json({
                    status: 1,
                    msg: 'The request is ok',
                    data: resolve
                })
            },
            (reject) => {
                next(reject)
            }
        )
    })
    //智能硬件 
router.get('/product/parts', (request, response, next) => {
    let begin = [Number(request.query.begin), Number(request.query.ending)]
    console.log(begin)
    let op = 'SELECT * FROM parts limit ?,?'
    let P = data.request(op, begin)
    P.then((resolve) => {
            response.json({
                status: 1,
                msg: 'The request is ok',
                data: resolve
            })
        },
        (reject) => {
            next(reject)
        }
    )
})
router.use((err, request, response, next) => {
    response.send({
        code: err.code,
        status: 0,
        msg: err.sqlMessage
    })
})


module.exports = router