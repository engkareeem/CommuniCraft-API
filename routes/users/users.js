const express = require('express')
const router = express.Router()
const {getUsersLogic, getUserLogic, updateUserLogic, deleteUserLogic, matchUserLogic} = require("../../controller/users/users");
const {getUserToolsLogic, useLogic, releaseLogic, deleteUserToolLogic} = require("../../controller/users/tools");
const { getCurrentUser, checkCurrentUserWithToken, checkPrivilegedUserWithToken} = require('../../middleware/auth_middleware');


router.get("/", getUsersLogic)
router.get("/:id" , getUserLogic)
router.get("/:id/match/:size(\\d+)",checkCurrentUserWithToken , matchUserLogic);
router.patch("/:id",checkCurrentUserWithToken,getCurrentUser, updateUserLogic);
router.delete("/:id", checkPrivilegedUserWithToken,deleteUserLogic);

router.get("/:id/tools", getUserToolsLogic)
router.post("/:id/tools/:toolId/use",checkCurrentUserWithToken, useLogic)
router.post("/:id/tools/:toolId/release",checkCurrentUserWithToken, releaseLogic)
router.delete("/:id/tools/:toolId",checkCurrentUserWithToken, deleteUserToolLogic)

module.exports = router


/*
  /projects/findProject/userID

  axios.get("url").then((data)=> {
    res.send(data)
  })

*/