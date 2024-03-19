const express = require('express')
const materialsModel = require("../../models/material");
const {updateDoc,isValidId} = require("../../utility");
const router = express.Router()

router.patch("/:materialId", async (req, res) => {
    // TODO: Privileged
    if (isValidId(req.params.materialId)) {
        let materialId = req.params.materialId;
        let tool = await materialsModel.findById(materialId)
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