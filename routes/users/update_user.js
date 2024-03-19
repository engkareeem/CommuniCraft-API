const express = require('express')
const usersModel = require("../../models/user");
const mongoose = require("mongoose");
const {updateDoc,isValidId} = require("../../utility");
const router = express.Router()

router.patch("/:id", async(req, res) => {
    // TODO: Authorized
    if(isValidId(req.params.id)) {
        let user = await usersModel.findOne({'_id': req.params.id})
        if(user) {
            user = updateDoc(user, req.body);
            await user.save();
            res.status(200).json({message: "Updated successfully", data: user});
        } else {
            res.status(404).json({message: "User not found or could not be updated"})
        }
    } else {
        res.status(400).json({message: "Invalid UserId provided"})
    }
})

module.exports = router