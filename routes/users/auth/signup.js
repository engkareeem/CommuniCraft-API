const express = require('express')
const router = express.Router()

router.post("/signup", (req, res) => {
    res.status(200);
    res.send("TOKEN")
})

module.exports = router