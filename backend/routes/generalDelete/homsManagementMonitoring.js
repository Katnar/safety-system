const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/generalDelete/homsManagementMonitoring");

// find spec
router.get("/homsManagementMonitoringDelete/:id", findById);
//find all
router.get("/homsManagementMonitoringDelete", find);
//add
router.post("/homsManagementMonitoringDelete", create); /**/
//update
router.put("/homsManagementMonitoringDelete/:id", update);
//delete
router.delete("/homsManagementMonitoringDelete/:id", remove);

module.exports = router;
