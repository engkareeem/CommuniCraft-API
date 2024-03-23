const express = require('express')
const router = express.Router()
const {getUsersLogic, getUserLogic, updateUserLogic, deleteUserLogic} = require("../../controller/users/users");
const {getUserToolsLogic, useLogic, releaseLogic, deleteUserToolLogic} = require("../../controller/users/tools");
const { checkAuth, getCurrentUser } = require('../../middleware/auth_middleware');
const { auth_erorr_handler } = require('../../controller/auth_controller');

router.get("/", getUsersLogic)
router.get("/:id", getUserLogic)
router.patch("/:id", updateUserLogic);
router.delete("/:id", deleteUserLogic);

router.get("/:id/tools", getUserToolsLogic)
router.post("/:id/tools/:toolId/use", useLogic)
router.post("/:id/tools/:toolId/release", releaseLogic)
router.delete("/:id/tools/:toolId", deleteUserToolLogic)

router.use(auth_erorr_handler);
module.exports = router


/*
  /projects/findProject/userID

*/