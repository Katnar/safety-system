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
} = require("../../controllers/general/hazardsMonitoring");

// find spec
router.get("/hazardsMonitoring/:id", findById);
//findbyrole
router.get("/hazardsMonitoring/bygdod/:gdod", findByGdod);

router.get("/hazardsMonitoring/byhativa/:hativa", findByHativa);

router.get("/hazardsMonitoring/byogda/:ogda", findByOgda);

router.get("/hazardsMonitoring/bypikod/:pikod", findByPikod);
//find all
router.get("/hazardsMonitoring", find);
//add
router.post("/hazardsMonitoring", create); /**/
//update
router.put("/hazardsMonitoring/:id", update);
//delete
router.delete("/hazardsMonitoring/:id", remove);

module.exports = router;
