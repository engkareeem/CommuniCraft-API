const materialsModel = require("../../models/material");
const {isValidId, updateDoc} = require("../../utility");
const materialModel = require("../../models/material");
module.exports.getMaterialsLogic = async (req, res) => {
    // TODO: Privileged
    let tools = await materialsModel.find();
    res.status(200).json({message: "OK", data: tools})
}

module.exports.updateMaterialLogic = async (req, res) => {
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
}

module.exports.deleteMaterialLogic = async (req, res) => {
    // TODO: Privileged
    if(isValidId(req.params.id)) {
        let result = await materialModel.deleteOne({'_id': req.params.id})
        if(result && result.deletedCount > 0) {
            res.status(200).json({message: "Deleted successfully"});
        } else {
            res.status(404).json({message: "Material not found or could not be deleted"})
        }
    } else {
        res.status(400).json({message: "Invalid MaterialId provided"})
    }
}

module.exports.addMaterialLogic = async (req, res) => {
    // TODO: Privileged
    let material = new materialsModel(req.body)
    await material.save();
    res.status(200).json({message: "Created successfully"})
}