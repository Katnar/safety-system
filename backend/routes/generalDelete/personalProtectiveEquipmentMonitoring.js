const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/generalDelete/personalProtectiveEquipmentMonitoring");

// find spec
router.get("/personalProtectiveEquipmentMonitoringDelete/:id", findById);
//find all
router.get("/personalProtectiveEquipmentMonitoringDelete", find);
//add
router.post("/personalProtectiveEquipmentMonitoringDelete", create); /**/
//update
router.put("/personalProtectiveEquipmentMonitoringDelete/:id", update);
//delete
router.delete("/personalProtectiveEquipmentMonitoringDelete/:id", remove);

module.exports = router;
