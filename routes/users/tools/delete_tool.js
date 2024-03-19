const express = require('express')
const {hasTool} = require("../../../controller/users/users");
const {isValidId} = require("../../../utility");

const usersModel = require("../../../models/user");
const toolsModel = require("../../../models/tool");
const router = express.Router()

router.delete("/:id/tools/:toolId", async (req, res) => {
    // TODO: Authorized
    if(isValidId(req.params.id) && isValidId(req.params.toolId)) {
        let user = await usersModel.findOne({'_id': req.params.id})
        let toolId = req.params.toolId;
        if(user) {
            if(hasTool(user, toolId)) {
                let toolIndex = user.ownedTools.findIndex(obj => obj.tool.toString() === toolId);
                user.ownedTools.splice(toolIndex, 1)
                await user.save();
                res.status(200).json({message: "Deleted successfully"});
            } else {
                res.status(400).json({message: "The tool isn't available in your inventory"});
            }
        } else {
            res.status(404).json({message: "User not found"})
        }
    } else {
        res.status(400).json({message: "Invalid ToolId or UserId provided"})
    }
})

module.exports = router