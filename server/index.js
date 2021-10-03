const express = require('express')
const app = express()
const pages = require('./pages')
const data = require('./data')

app.get('/', (req, res) => {
    res.send('api success')
})

app.use('/pages', pages)
app.use('/data', data)

module.exports = {
    path: '/api',
    handler: app,
}
