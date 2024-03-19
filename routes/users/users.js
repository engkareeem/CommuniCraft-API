const express = require('express')
const router = express.Router()
const usersModel = require('../../models/user')
const mongoose = require("mongoose")
const {isValidId} = require("../../utility");
router.get("/", async (req, res) => {
    let users = await usersModel.find();
    res.status(200);
    res.send(users)
})

router.get("/:id", async (req, res) => {

    if(isValidId(req.params.id)) {
        let user = await usersModel.findOne({'_id': req.params.id})
        if(user) {
            res.status(200).send(user);
        } else {
            res.status(404).send({message: "User not found"})
        }
    } else {
        res.status(400).send({message: "Invalid UserId provided"})
    }

})



module.exports = router