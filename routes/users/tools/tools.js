const express = require('express')
const router = express.Router()

router.get("/:id(\\d+)/tools", (req, res) => {
    res.status(200);
    res.send(["tool1","tool2"])
})

module.exports = router