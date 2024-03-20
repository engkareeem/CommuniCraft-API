const express = require('express')
const router = express.Router()
const {getUsersLogic, updateUserLogic, deleteUserLogic} = require("../../controller/users/users");
const {getUserToolsLogic, useLogic, releaseLogic, deleteUserToolLogic} = require("../../controller/users/tools");

router.get("/", getUsersLogic)
router.get("/:id", getUsersLogic)
router.patch("/:id", updateUserLogic)
router.delete("/:id", deleteUserLogic)

router.get("/:id/tools", getUserToolsLogic)
router.post("/:id/tools/:toolId/use", useLogic)
router.post("/:id/tools/:toolId/release", releaseLogic)
router.delete("/:id/tools/:toolId", deleteUserToolLogic)

module.exports = router