const express = require('express')
const toolsModel = require("../../models/tool");
const router = express.Router()

router.get("/", async (req, res) => {
    // TODO: Privileged
    let tools = await toolsModel.find();
    res.status(200).json({message: "OK", data: tools})
})

module.exports = router