const express = require('express')
const app = express()
const db = require('../db/index')
const user = require('./user/index')

app.get('/', (req, res) => {
    res.send(db.get('name'))
})
app.use('user', user)

module.exports = {
    path: '/api',
    handler: app
}
