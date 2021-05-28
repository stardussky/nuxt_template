const express = require('express')
const router = express.Router()

router.get('/index', (req, res) => {
    res.json({
        status: 200,
        data: {
            zh: {
                lang: '中文',
                about: '關於',
                doc: '文件',
            },
            en: {
                lang: 'EN',
                about: 'About',
                doc: 'Documentation',
            },
        },
    })
})

router.get('/about', (req, res) => {
    res.json({
        status: 200,
        data: {
            zh: {
                greet: '嗨 關於',
            },
            en: {
                greet: 'HI about',
            },
        },
    })
})

router.get('/all/*', (req, res) => {
    res.json({
        status: 200,
        data: {
            zh: {
                message: '找不到路徑',
            },
            en: {
                message: 'Page Not Found',
            },
        },
    })
})

router.get('/*', function (req, res) {
    res.json({
        status: 500,
        error: 'Language Route Not Found',
    })
})

module.exports = router
