const mongoose = require("mongoose");
const toolsModel = require("../../models/tool");
module.exports = {
    hasTool: function(user ,toolId) {
        let userTools = user.ownedTools.map(obj => obj.tool.toString())
        return userTools.includes(toolId);
    },
    getTools: function (user) {
        let toolsIds = user['ownedTools'];
        let objectIds = toolsIds.map(obj => obj.tool)
        return toolsModel.find({'_id': {$in: objectIds}});
    },


}