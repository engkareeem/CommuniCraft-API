const express = require('express')
const {getToolsLogic, addToolLogic, deleteToolLogic, updateToolLogic} = require("../../controller/tools/tools");
const router = express.Router()

router.get("/", getToolsLogic)
router.post("/", addToolLogic)
router.delete("/:id", deleteToolLogic)
router.patch("/:toolId", updateToolLogic)

module.exports = router