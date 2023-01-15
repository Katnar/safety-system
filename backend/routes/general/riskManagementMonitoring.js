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
} = require("../../controllers/general/riskManagementMonitoring");

// find spec
router.get("/riskManagementMonitoring/:id", findById);
//findbyrole
router.get("/riskManagementMonitoring/bygdod/:gdod", findByGdod);

router.get("/riskManagementMonitoring/byhativa/:hativa", findByHativa);

router.get("/riskManagementMonitoring/byogda/:ogda", findByOgda);

router.get("/riskManagementMonitoring/bypikod/:pikod", findByPikod);
//find all
router.get("/riskManagementMonitoring", find);
//add
router.post("/riskManagementMonitoring", create); /**/
//update
router.put("/riskManagementMonitoring/:id", update);
//delete
router.delete("/riskManagementMonitoring/:id", remove);

module.exports = router;
