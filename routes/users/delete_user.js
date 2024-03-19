const express = require('express')
const router = express.Router()

router.delete("/:id", (req, res) => {
    res.status(200);
    res.send("Deleted successfully")
    // TODO: Auth | Privileged
})

module.exports = router