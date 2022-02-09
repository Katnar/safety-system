const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/general/hazardsMonitoring");

// find spec
router.get("/hazardsMonitoring/:id", findById);
//find all
router.get("/hazardsMonitoring", find);
//add
router.post("/hazardsMonitoring", create); /**/
//update
router.put("/hazardsMonitoring/:hazardsMonitoringId", update);
//delete
router.delete("/hazardsMonitoring/:id", remove);

module.exports = router;
