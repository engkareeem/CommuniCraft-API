const toolsModel = require("../../models/tool");
const usersModel = require("../../models/user");
const {isValidId, updateDoc} = require("../../utility");
const {getCurrentUser, isPrivileged} = require("../../middleware/auth_middleware");
module.exports.hasTool = (user, toolId) => {
    let userTools = user.ownedTools.map(obj => obj.tool.toString())
    return userTools.includes(toolId);
};

module.exports.getTools = (user) => {
    let toolsIds = user['ownedTools'];
    let objectIds = toolsIds.map(obj => obj.tool)
    return toolsModel.find({'_id': {$in: objectIds}});
}

module.exports.getUsersLogic = async (req, res) => {
    let users = await usersModel.find();
    res.status(200);
    res.send(users)
}

module.exports.getUserLogic = async (req, res) => {
    if (isValidId(req.params.id)) {
        let user = await usersModel.findOne({'_id': req.params.id})
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send({message: "User not found"})
        }
    } else {
        res.status(400).send({message: "Invalid UserId provided"})
    }
}

module.exports.updateUserLogic = async(req, res) => {
    // TODO: Authorized
    if(isValidId(req.params.id)) {
        let user = await usersModel.findOne({'_id': req.params.id})
        let data = req.body;
        if(user) {
            if(!await isPrivileged(req.user._id)) delete data.isAdmin; // to prevent the user from making himself admin.
            user = updateDoc(user, data);
            await user.save();
            res.status(200).json({message: "Updated successfully", data: user});
        } else {
            res.status(404).json({message: "User not found or could not be updated"})
        }
    } else {
        res.status(400).json({message: "Invalid UserId provided"})
    }
}

module.exports.deleteUserLogic = async (req, res) => {
    // TODO: Privileged
    if(isValidId(req.params.id)) {
        let result = await usersModel.deleteOne({'_id': req.params.id})
        if(result && result.deletedCount > 0) {
            res.status(200).json({message: "Deleted successfully"});
        } else {
            res.status(404).json({message: "User not found or could not be deleted"})
        }
    } else {
        res.status(400).json({message: "Invalid UserId provided"})
    }
}