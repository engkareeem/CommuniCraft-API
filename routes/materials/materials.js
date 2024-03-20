const express = require('express')
const {getMaterialsLogic, addMaterialLogic, deleteMaterialLogic, updateMaterialLogic} = require("../../controller/materials/materials");
const router = express.Router()

router.get("/", getMaterialsLogic)
router.post("/", addMaterialLogic)
router.delete("/:id", deleteMaterialLogic)
router.patch("/:materialId", updateMaterialLogic)

module.exports = router