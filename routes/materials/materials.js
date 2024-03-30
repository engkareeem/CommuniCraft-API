const express = require('express')
const {getMaterialsLogic, addMaterialLogic, deleteMaterialLogic, updateMaterialLogic} = require("../../controller/materials/materials");
const {checkPrivilegedUserWithToken} = require("../../middleware/auth_middleware");
const router = express.Router()

router.get("/" ,getMaterialsLogic)
router.post("/",checkPrivilegedUserWithToken , addMaterialLogic)
router.delete("/:id",checkPrivilegedUserWithToken , deleteMaterialLogic)
router.patch("/:materialId",checkPrivilegedUserWithToken , updateMaterialLogic)

module.exports = router