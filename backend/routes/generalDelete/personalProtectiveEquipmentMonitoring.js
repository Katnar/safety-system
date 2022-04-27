const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/general/personalProtectiveEquipmentMonitoring");

// find spec
router.get("/personalProtectiveEquipmentMonitoring/:id", findById);
//find all
router.get("/personalProtectiveEquipmentMonitoring", find);
//add
router.post("/personalProtectiveEquipmentMonitoring", create); /**/
//update
router.put("/personalProtectiveEquipmentMonitoring/:id", update);
//delete
router.delete("/personalProtectiveEquipmentMonitoring/:id", remove);

module.exports = router;
