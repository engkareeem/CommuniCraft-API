const express = require('express')
const router = express.Router()

router.patch("/:id(\\d+)/tools/:toolId(\\d+)", (req, res) => {
    res.status(200);
    res.send("Updated successfully")
})

module.exports = router