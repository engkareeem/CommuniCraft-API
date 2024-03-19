const express = require('express')
const materialsModel = require("../../models/material");
const {isValidId} = require("../../utility");
const router = express.Router()

router.post("/", async (req, res) => {
    // TODO: Privileged
    let material = new materialsModel(req.body)
    await material.save();
    res.status(200).json({message: "Created successfully"})
})

module.exports = router