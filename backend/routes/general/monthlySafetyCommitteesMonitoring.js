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
} = require("../../controllers/general/monthlySafetyCommitteesMonitoring");

// find spec
router.get("/monthlySafetyCommitteesMonitoring/:id", findById);
//findbyrole
router.get("/monthlySafetyCommitteesMonitoring/bygdod/:gdod", findByGdod);

router.get("/monthlySafetyCommitteesMonitoring/byhativa/:hativa", findByHativa);

router.get("/monthlySafetyCommitteesMonitoring/byogda/:ogda", findByOgda);

router.get("/monthlySafetyCommitteesMonitoring/bypikod/:pikod", findByPikod);
//find all
router.get("/monthlySafetyCommitteesMonitoring", find);
//add
router.post("/monthlySafetyCommitteesMonitoring", create); /**/
//update
router.put("/monthlySafetyCommitteesMonitoring/:id", update);
//delete
router.delete("/monthlySafetyCommitteesMonitoring/:id", remove);

module.exports = router;
