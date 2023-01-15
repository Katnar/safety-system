const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
  findByGdod,
  findByHativa,
  findByOgda,
  findByPikod,
} = require("../../controllers/general/personalProtectiveEquipmentMonitoring");

// find spec
router.get("/personalProtectiveEquipmentMonitoring/:id", findById);
//findbyrole
router.get("/personalProtectiveEquipmentMonitoring/bygdod/:gdod", findByGdod);

router.get("/personalProtectiveEquipmentMonitoring/byhativa/:hativa", findByHativa);

router.get("/personalProtectiveEquipmentMonitoring/byogda/:ogda", findByOgda);

router.get("/personalProtectiveEquipmentMonitoring/bypikod/:pikod", findByPikod);
//find all
router.get("/personalProtectiveEquipmentMonitoring", find);
//add
router.post("/personalProtectiveEquipmentMonitoring", create); /**/
//update
router.put("/personalProtectiveEquipmentMonitoring/:id", update);
//delete
router.delete("/personalProtectiveEquipmentMonitoring/:id", remove);

module.exports = router;
