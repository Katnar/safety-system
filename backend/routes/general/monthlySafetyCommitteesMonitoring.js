const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/general/monthlySafetyCommitteesMonitoring");

// find spec
router.get("/monthlySafetyCommitteesMonitoring/:id", findById);
//find all
router.get("/monthlySafetyCommitteesMonitoring", find);
//add
router.post("/monthlySafetyCommitteesMonitoring", create); /**/
//update
router.put("/monthlySafetyCommitteesMonitoring/:id", update);
//delete
router.delete("/monthlySafetyCommitteesMonitoring/:id", remove);

module.exports = router;
