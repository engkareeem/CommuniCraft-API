// nvm it's just for testing...
const express = require('express')
const router = express.Router()

router.get("/:id", (req, res) => {
    res.status(200);
    res.send(`This is ${req.params.id} user...`)
})

module.exports = router