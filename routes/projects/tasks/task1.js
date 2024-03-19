// nvm it's just for testing...
const express = require('express')
const router = express.Router()

router.get("/:project/tasks", (req, res) => {
    res.status(200);
    res.send("Hello im a task :#")
})

module.exports = router