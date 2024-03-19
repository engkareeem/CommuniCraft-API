const express = require('express')
const toolsModel = require("../../models/tool");
const {updateDoc, isValidId} = require("../../utility");
const router = express.Router()

router.patch("/:toolId", async (req, res) => {
    // TODO: Privileged
    if (isValidId(req.params.toolId)) {
        let toolId = req.params.toolId;
        let tool = await toolsModel.findById(toolId)
        if (tool) {
            tool = updateDoc(tool, req.body)
            await tool.save();
            res.status(200).json({message: "Updated successfully"});
        } else {
            res.status(404).json({message: "Tool not found"});
        }
    } else {
        res.status(400).json({message: "Invalid ToolId provided"})
    }
})

module.exports = router