const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/generalDelete/riskManagementMonitoring");

// find spec
router.get("/riskManagementMonitoringDelete/:id", findById);
//find all
router.get("/riskManagementMonitoringDelete", find);
//add
router.post("/riskManagementMonitoringDelete", create); /**/
//update
router.put("/riskManagementMonitoringDelete/:id", update);
//delete
router.delete("/riskManagementMonitoringDelete/:id", remove);

module.exports = router;
