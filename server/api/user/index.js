const express = require('express')
const router = express.Router()
// const db = require('../../db/index')

const user = (req, res) => {
    res.send('hello user')
}

router.get('user', user)

module.exports = router
