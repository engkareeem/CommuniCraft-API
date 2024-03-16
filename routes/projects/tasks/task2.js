// nvm it's just for testing...
const express = require('express')
const router = express.Router()

router.get("/:project/tasks/:id", (req, res) => {
    res.status(200);
    res.send(`Hello im a ${req.params.id} task...`)
})

module.exports = router