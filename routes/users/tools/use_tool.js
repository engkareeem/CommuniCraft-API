const express = require('express')
const router = express.Router()

router.post("/:id(\\d+)/tools/:toolId(\\d+)/use", (req, res) => {
    res.status(200);
    res.send("OK")
})
router.post("/:id(\\d+)/tools/:toolId(\\d+)/release", (req, res) => {
    res.status(200);
    res.send("OK")
})

module.exports = router