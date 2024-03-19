const express = require('express')
const usersModel = require("../../../models/user");
const {getTools} = require("../../../controller/users/users");
const {isValidId} = require("../../../utility")
const router = express.Router()

router.get("/:id/tools", async (req, res) => {

    if(isValidId(req.params.id)) {
        let user = await usersModel.findById(req.params.id).lean()
        if(user) {
            let tools = await getTools(user)
            res.status(200).json({message: "OK", data: tools});
        } else {
            res.status(404).json({message: "User not found"})
        }
    } else {
        res.status(400).json({message: "Invalid ToolId provided"})
    }
})

module.exports = router