const toolsModel = require("../../models/tool");
const usersModel = require("../../models/user");
const {isValidId, updateDoc} = require("../../utility");
const {getCurrentUser, isPrivileged} = require("../../middleware/auth_middleware");
const {findPeopleWithSkill} = require("./external_api");

function dotProduct(vector1, vector2) {
    return vector1.reduce((acc, val, index) => acc + val * vector2[index], 0);
}
function magnitude(vector) {
    return Math.sqrt(vector.reduce((acc, val) => acc + val ** 2, 0));
}
function cosineSimilarity(vector1, vector2) {
    const dot = dotProduct(vector1, vector2);
    const mag1 = magnitude(vector1);
    const mag2 = magnitude(vector2);
    if (mag1 === 0 || mag2 === 0) return 0; // Handle zero vectors
    return dot / (mag1 * mag2);
}

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

module.exports.matchUserLogic = async (req, res) => {
    if (isValidId(req.params.id)) {
        const currentUserData = await usersModel.findById(req.params.id).lean();
        if (currentUserData) {
            const allUsers = await usersModel.find({ email: { $ne: currentUserData.email } }, {password: 0, isAdmin: 0, similarity: 0, ownedTools: 0, borrowedTools: 0}).lean();

            let closestUsers = [];

            allUsers.forEach(user => {
                let skillsIntersection = currentUserData.skills.filter(skill => user.skills.includes(skill));
                let interestsIntersection = currentUserData.interests.filter(interest => user.interests.includes(interest));

                let skillsSimilarity = skillsIntersection.length / Math.sqrt(currentUserData.skills.length * user.skills.length);
                let interestsSimilarity = interestsIntersection.length / Math.sqrt(currentUserData.interests.length * user.interests.length);

                let overallSimilarity = cosineSimilarity([skillsSimilarity, interestsSimilarity], [1, 1]);

                closestUsers.push({ user, similarity: overallSimilarity });
            });

            closestUsers.sort((a, b) => b.similarity - a.similarity);
            let externalClosestUsers = await findPeopleWithSkill(currentUserData.skills.first);
            if(externalClosestUsers) externalClosestUsers = externalClosestUsers.slice(0, req.params.size);
            res.status(200).json({internal: closestUsers.slice(0, req.params.size), external: externalClosestUsers})
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