const express = require('express')
const materialsModel = require("../../models/material");
const router = express.Router()

router.get("/", async (req, res) => {
    // TODO: Privileged
    let tools = await materialsModel.find();
    res.status(200).json({message: "OK", data: tools})
})

module.exports = router