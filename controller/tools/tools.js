const toolsModel = require("../../models/tool");
const {isValidId, updateDoc} = require("../../utility");
module.exports.getToolsLogic = async (req, res) => {
    // TODO: Privileged
    let tools = await toolsModel.find();
    res.status(200).json({message: "OK", data: tools})
}

module.exports.updateToolLogic = async (req, res) => {
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
}

module.exports.deleteToolLogic = async (req, res) => {
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
}

module.exports.addToolLogic = async (req, res) => {
    // TODO: Privileged
    let tool = new toolsModel(req.body)
    await tool.save();
    res.status(200).json({message: "Created successfully", id: tool._id})
}