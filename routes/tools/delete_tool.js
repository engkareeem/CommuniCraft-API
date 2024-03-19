const express = require('express')
const toolsModel = require("../../models/tool");
const {isValidId} = require("../../utility");
const router = express.Router()

router.delete("/:id", async (req, res) => {
    // TODO: Privileged
    if(isValidId(req.params.id)) {
        let result = await toolsModel.deleteOne({'_id': req.params.id})
        if(result && result.deletedCount > 0) {
            res.status(200).json({message: "Deleted successfully"});
        } else {
            res.status(404).json({message: "Tool not found or could not be deleted"})
        }
    } else {
        res.status(400).json({message: "Invalid ToolId provided"})
    }
})

module.exports = router