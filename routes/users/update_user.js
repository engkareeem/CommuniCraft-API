const express = require('express')
const router = express.Router()

router.patch("/:id", (req, res) => {
    res.status(200);
    res.send("Updated successfully")
})

module.exports = router