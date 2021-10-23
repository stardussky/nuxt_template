const express = require('express')
const router = express.Router()
// const axios = require('../plugins/axios')
const getLocaleData = require('@/server/functions/getLocaleData')

router.get('/', (req, res) => {
    const { lang } = req.query

    try {
        res.json(getLocaleData('index', lang))
    } catch (e) {
        const status = e.status || 500
        res
            .status(status)
            .send({
                status,
                message: e.message || 'Internal Server Error',
            })
    }
})

router.get('/about', (req, res) => {
    const { lang } = req.query

    try {
        res.json(getLocaleData('about', lang))
    } catch (e) {
        const status = e.status || 500
        res
            .status(status)
            .send({
                status,
                message: e.message || 'Internal Server Error',
            })
    }
})

router.get('/*', function (req, res) {
    const { lang } = req.query

    try {
        res.json(getLocaleData('all', lang))
    } catch (e) {
        const status = e.status || 500
        res
            .status(status)
            .send({
                status,
                message: e.message || 'Internal Server Error',
            })
    }
})

module.exports = router
