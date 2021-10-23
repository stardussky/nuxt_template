const express = require('express')
const router = express.Router()
// const axios = require('../plugins/axios')

router.get('/*', function (req, res) {
    const status = 500
    res
        .status(status)
        .send({
            status,
            message: 'Internal Server Error',
        })
})

module.exports = router
