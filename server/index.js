const express = require('express')
const app = express()
const lang = require('./lang')

app.get('/', (req, res) => {
    res.send('api success')
})

app.use('/lang', lang)

module.exports = {
    path: '/api',
    handler: app
}
