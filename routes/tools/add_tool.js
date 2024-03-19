const express = require('express')
const toolsModel = require("../../models/tool");
const {isValidId} = require("../../utility");
const router = express.Router()

router.post("/", async (req, res) => {
    // TODO: Privileged
    let tool = new toolsModel(req.body)
    await tool.save();
    res.status(200).json({message: "Created successfully", id: tool._id})
})

module.exports = router