const express = require('express')
const router = express.Router()

router.post("/login", (req, res) => {
    res.status(200);
    res.send("TOKEN")
})

module.exports = router