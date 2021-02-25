const express = require('express')
const router = express.Router()

router.get('/index_zh-TW', (req, res) => {
    res.json({
        lang: '中文',
        about: '關於',
        doc: '文件'
    })
})

router.get('/index_en', (req, res) => {
    res.json({
        lang: 'EN',
        about: 'About',
        doc: 'Documentation'
    })
})

router.get('/about_zh-TW', (req, res) => {
    res.json({
        greet: '嗨 關於'
    })
})

router.get('/about_en', (req, res) => {
    res.json({
        greet: 'HI about'
    })
})

router.get('/all_zh-TW/:pathMatch', (req, res) => {
    res.json({
        message: '找不到路徑'
    })
})

router.get('/all_en/:pathMatch', (req, res) => {
    res.json({
        message: 'Router Not Found'
    })
})

router.get('/*', function (req, res) {
    throw new Error('Lang Not Found')
})

module.exports = router
