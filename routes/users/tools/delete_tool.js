const express = require('express')
const router = express.Router()

router.delete("/:id(\\d+)/tools/:toolId(\\d+)", (req, res) => {
    res.status(200);
    res.send("Deleted successfully")
    // TODO: Auth
})

module.exports = router