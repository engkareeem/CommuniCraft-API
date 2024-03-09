// nvm it's just for testing...
const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.status(200);
    res.send("Hello blud im a product!")
})

router.get("/:id", (req, res, next) => {
    if(req.params.id.length < 5) {
        let err = new Error("Bad request")
        next(err);
    } else {
        res.status(200);
        res.send("Im an blud product hehe");
    }
})

module.exports = router