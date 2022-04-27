const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/generalDelete/monthlySafetyCommitteesMonitoring");

// find spec
router.get("/monthlySafetyCommitteesMonitoringDelete/:id", findById);
//find all
router.get("/monthlySafetyCommitteesMonitoringDelete", find);
//add
router.post("/monthlySafetyCommitteesMonitoringDelete", create); /**/
//update
router.put("/monthlySafetyCommitteesMonitoringDelete/:id", update);
//delete
router.delete("/monthlySafetyCommitteesMonitoringDelete/:id", remove);

module.exports = router;
