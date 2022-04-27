const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/generalDelete/hazardsMonitoring");

// find spec
router.get("/hazardsMonitoringDelete/:id", findById);
//find all
router.get("/hazardsMonitoringDelete", find);
//add
router.post("/hazardsMonitoringDelete", create); /**/
//update
router.put("/hazardsMonitoringDelete/:id", update);
//delete
router.delete("/hazardsMonitoringDelete/:id", remove);

module.exports = router;
