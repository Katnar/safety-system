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
} = require("../../controllers/general/homsManagementMonitoring");

// find spec
router.get("/homsManagementMonitoring/:id", findById);
//findbyrole
router.get("/homsManagementMonitoring/bygdod/:gdod", findByGdod);

router.get("/homsManagementMonitoring/byhativa/:hativa", findByHativa);

router.get("/homsManagementMonitoring/byogda/:ogda", findByOgda);

router.get("/homsManagementMonitoring/bypikod/:pikod", findByPikod);
//find all
router.get("/homsManagementMonitoring", find);
//add
router.post("/homsManagementMonitoring", create); /**/
//update
router.put("/homsManagementMonitoring/:id", update);
//delete
router.delete("/homsManagementMonitoring/:id", remove);

module.exports = router;
