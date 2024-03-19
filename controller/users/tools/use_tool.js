const usersModel = require("../../../models/user");
const {TOOL_NOT_AVAILABLE, TOOL_NOT_FOUND, USER_NOT_FOUND, SUCCESS, TOOL_NOT_BORROWED} = require("../constants");
const mongoose = require('mongoose')

module.exports = {
    findToolOwner: function (user, toolId) {
        return usersModel.findOne({
            'ownedTools.tool': new mongoose.Types.ObjectId(toolId),
            '_id': {$ne: user._id},
            'ownedTools.availableToBorrow': true
        });
    },
    useTool: async function (userId, toolId) {
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
    },
    releaseTool: async function (userId, toolId) {
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
}