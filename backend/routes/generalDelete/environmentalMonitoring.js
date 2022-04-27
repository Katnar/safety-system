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
} = require("../../controllers/generalDelete/environmentalMonitoring");

// find spec
router.get("/environmentalMonitoringDelete/:id", findById);

router.get("/environmentalMonitoringDelete/bygdod/:gdod", findByGdod);

router.get("/environmentalMonitoringDelete/byhativa/:hativa", findByHativa);

router.get("/environmentalMonitoringDelete/byogda/:ogda", findByOgda);

router.get("/environmentalMonitoringDelete/bypikod/:pikod", findByPikod);
//find all
router.get("/environmentalMonitoringDelete", find);
//add
router.post("/environmentalMonitoringDelete", create); /**/
//update
router.put("/environmentalMonitoringDelete/:id", update);
//delete
router.delete("/environmentalMonitoringDelete/:id", remove);

module.exports = router;
