// nvm it's just for testing...
const express = require('express')
const router = express.Router()

router.get("/:project", (req, res) => {
    res.status(200);
    res.send("Hello im a project!! if you believe i believe")
})

module.exports = router