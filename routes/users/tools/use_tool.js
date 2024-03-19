const express = require('express')
const {isValidId} =  require("../../../utility")
const router = express.Router()
const {useTool, releaseTool} = require("../../../controller/users/tools/use_tool");

router.post("/:id/tools/:toolId/use", async (req, res) => {
    // TODO: Authorized
    let userId = req.params.id;
    let toolId = req.params.toolId;
    if (isValidId(userId) && isValidId(toolId)) {
        let result = await useTool(userId, toolId);
        res.status(result.status).json(result);
    } else {
        res.status(400).json({status: 400, message: "Invalid ToolId or UserId provided"})
    }
})
router.post("/:id/tools/:toolId/release", async (req, res) => {
    // TODO: Authorized
    let userId = req.params.id;
    let toolId = req.params.toolId;
    if (isValidId(userId) && isValidId(toolId)) {
        let result = await releaseTool(userId, toolId)
        res.status(result.status).json(result);

    } else {
        res.status(400).json({status: 400, message: "Invalid ToolId or UserId provided"})
    }
})

module.exports = router