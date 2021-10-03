const express = require('express')
const router = express.Router()
// const axios = require('../plugins/axios')

router.get('/*', function (req, res) {
    res.json({
        statusCode: 500,
        error: 'Data Api Not Found',
    })
})

module.exports = router
