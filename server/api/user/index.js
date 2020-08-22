const express = require('express')
const router = express.Router()
const db = require('../../db/index')

const user = (req, res) => {
    res.json(db.get('user.list'))
}

router.get('/', user)

const addUser = ({ params: { name } }, res) => {
    res.json(db.get('user.list').push({
        id: db.get('user.increment').value(),
        name
    }).write())
    db.update('user.increment', n => ++n + '').write()
}

router.post('/:name', addUser)

const deleteUser = ({ params: { id } }, res) => {
    const user = db.get('user.list').find({ id }).value()
    if (user) {
        res.json(db.get('user.list').remove({ id }).write())
        return
    }
    res.json({
        status: 'error',
        message: 'user not found'
    })
}

router.delete('/:id', deleteUser)

module.exports = router
