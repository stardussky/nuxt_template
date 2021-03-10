const express = require('express')
const router = express.Router()

router.get('/index_zh', (req, res) => {
    res.json({
        status: 200,
        data: {
            lang: '中文',
            about: '關於',
            doc: '文件'
        }
    })
})

router.get('/index_en', (req, res) => {
    res.json({
        status: 200,
        data: {
            lang: 'EN',
            about: 'About',
            doc: 'Documentation'
        }
    })
})

router.get('/about_zh', (req, res) => {
    res.json({
        status: 200,
        data: {
            greet: '嗨 關於'
        }
    })
})

router.get('/about_en', (req, res) => {
    res.json({
        status: 200,
        data: {
            greet: 'HI about'
        }
    })
})

router.get('/all_zh/:pathMatch', (req, res) => {
    res.json({
        status: 200,
        data: {
            message: '找不到路徑'
        }
    })
})

router.get('/all_en/:pathMatch', (req, res) => {
    res.json({
        status: 200,
        data: {
            message: 'Router Not Found'
        }
    })
})

router.get('/*', function (req, res) {
    res.json({
        status: 500,
        data: {
            message: 'lang route not found'
        }
    })
})

module.exports = router
