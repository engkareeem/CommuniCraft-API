const express = require('express')
const {getToolsLogic, addToolLogic, deleteToolLogic, updateToolLogic} = require("../../controller/tools/tools");
const {checkPrivilegedUserWithToken} = require("../../middleware/auth_middleware");
const router = express.Router()

router.get("/", getToolsLogic)
router.post("/",checkPrivilegedUserWithToken , addToolLogic)
router.delete("/:id",checkPrivilegedUserWithToken , deleteToolLogic)
router.patch("/:toolId",checkPrivilegedUserWithToken , updateToolLogic)

module.exports = router