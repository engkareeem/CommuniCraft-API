// nvm it's just for testing...
const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.status(200);
    res.send("hello take all the projects")
})

module.exports = router