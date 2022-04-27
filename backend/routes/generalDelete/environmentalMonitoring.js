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
} = require("../../controllers/general/environmentalMonitoring");

// find spec
router.get("/environmentalMonitoring/:id", findById);

router.get("/environmentalMonitoring/bygdod/:gdod", findByGdod);

router.get("/environmentalMonitoring/byhativa/:hativa", findByHativa);

router.get("/environmentalMonitoring/byogda/:ogda", findByOgda);

router.get("/environmentalMonitoring/bypikod/:pikod", findByPikod);
//find all
router.get("/environmentalMonitoring", find);
//add
router.post("/environmentalMonitoring", create); /**/
//update
router.put("/environmentalMonitoring/:id", update);
//delete
router.delete("/environmentalMonitoring/:id", remove);

module.exports = router;
