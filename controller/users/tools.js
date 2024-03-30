const usersModel = require("../../models/user");
const {TOOL_NOT_AVAILABLE, TOOL_NOT_FOUND, USER_NOT_FOUND, SUCCESS, TOOL_NOT_BORROWED} = require("./constants");
const mongoose = require('mongoose')
const {isValidId} =  require("../../utility")
const {getTools, hasTool} = require("./users");

module.exports.findToolOwner = (user, toolId) => {
    return usersModel.findOne({
        'ownedTools.tool': new mongoose.Types.ObjectId(toolId),
        '_id': {$ne: user._id},
        'ownedTools.availableToBorrow': true
    });
};

module.exports.useTool = async (userId, toolId) => {
    let user = await usersModel.findOne({'_id': userId})
    if (!user) return USER_NOT_FOUND;

    let toolUser = await module.exports.findToolOwner(user, toolId);
    if (!toolUser) return TOOL_NOT_FOUND;

    let index = toolUser.ownedTools.findIndex(obj => obj.tool.toString() === toolId);
    if (toolUser.ownedTools[index].stockAvailable <= 0) return TOOL_NOT_AVAILABLE;

    toolUser.ownedTools[index].stockAvailable--;
    await toolUser.save();

    user.borrowedTools.push({tool: toolUser.ownedTools[index].tool, from: toolUser._id})
    await user.save();

    return SUCCESS;
}

module.exports.useLogic = async (req, res) => {
    // TODO: Authorized
    let userId = req.params.id;
    let toolId = req.params.toolId;
    if (isValidId(userId) && isValidId(toolId)) {
        let result = await module.exports.useTool(userId, toolId);
        res.status(result.status).json(result.message);
    } else {
        res.status(400).json({status: 400, message: "Invalid ToolId or UserId provided"})
    }
}

module.exports.releaseTool = async (userId, toolId) => {
    let user = await usersModel.findOne({'_id': userId})
    if (!user) return USER_NOT_FOUND

    let borrowedToolIndex = user.borrowedTools.findIndex(obj => obj.tool.toString() === toolId);
    if (borrowedToolIndex < 0) return TOOL_NOT_BORROWED;

    let toolUser = await usersModel.findById(user.borrowedTools[borrowedToolIndex].from)
    if (toolUser) { // if the tool owner account deleted, just ignore him and remove the tool from current user
        let ownedToolIndex = toolUser.ownedTools.findIndex(obj => obj.tool.toString() === toolId);
        if (ownedToolIndex >= 0) {
            toolUser.ownedTools[ownedToolIndex].stockAvailable++;
            await toolUser.save();
        }
    }
    user.borrowedTools.splice(borrowedToolIndex, 1)
    await user.save();

    return SUCCESS;
}

module.exports.releaseLogic = async (req, res) => {
    // TODO: Authorized
    let userId = req.params.id;
    let toolId = req.params.toolId;
    if (isValidId(userId) && isValidId(toolId)) {
        let result = await module.exports.releaseTool(userId, toolId)
        res.status(result.status).json(result.message);

    } else {
        res.status(400).json({status: 400, message: "Invalid ToolId or UserId provided"})
    }
}

module.exports.getUserToolsLogic = async (req, res) => {
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
}

module.exports.deleteUserToolLogic = async (req, res) => {
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
}