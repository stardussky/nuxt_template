const express = require('express')
const router = express.Router()
// const axios = require('../plugins/axios')
const getLocaleData = require('../functions/getLocaleData')

router.get('/index', (req, res) => {
    const { lang } = req.query

    res.json(getLocaleData('index', lang))
})

router.get('/about', (req, res) => {
    const { lang } = req.query

    res.json(getLocaleData('about', lang))
})

router.get('/all/*', (req, res) => {
    const { lang } = req.query

    res.json(getLocaleData('all', lang))
})

router.get('/*', function (req, res) {
    const { lang } = req.query

    res.json(getLocaleData('error', lang))
})

module.exports = router
