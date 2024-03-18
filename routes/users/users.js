const express = require('express')
const router = express.Router()
const usersModel = require('../../models/user')
router.get("/", async (req, res) => {
    let users = await usersModel.find();
    res.status(200);
    res.send(users)
})

router.get("/:id", async (req, res) => {
    let user = await usersModel.findOne({'_id': req.params.id})
    if(user) {
        res.status(200).send(user);
    } else {
        res.status(404).send({message: "User not found"})
    }
})



module.exports = router