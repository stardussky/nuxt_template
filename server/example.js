const express = require('express')
const app = express()

export default app.get('/', (req, res) => {
    res.send('serverMiddleware')
})
