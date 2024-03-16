const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.status(200);
    res.send(["user1"])
})

router.get("/:id(\\d+)", (req, res) => {
    res.status(200);
    res.send({name:"user1",role: "user", email:"test@bludmail.com"})
})

module.exports = router