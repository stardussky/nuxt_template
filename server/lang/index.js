const express = require('express')
const router = express.Router()

router.get('/index', (req, res) => {
    res.json({
        status: 200,
        data: {
            zh: {
                lang: '中文',
                about: '關於我們',
                doc: '文件',
            },
            en: {
                lang: 'EN',
                about: 'About Us',
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
                title: '關於我們',
            },
            en: {
                title: 'About Us',
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
