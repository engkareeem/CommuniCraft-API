// nvm it's just for testing...
const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.status(200);
    res.send("Hello blud im a product!")
})

module.exports = router