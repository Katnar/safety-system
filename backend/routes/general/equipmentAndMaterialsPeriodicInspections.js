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
} = require("../../controllers/general/equipmentAndMaterialsPeriodicInspections");

// find spec
router.get("/equipmentAndMaterialsPeriodicInspections/:id", findById);
//findbyrole
router.get("/equipmentAndMaterialsPeriodicInspections/bygdod/:gdod", findByGdod);

router.get("/equipmentAndMaterialsPeriodicInspections/byhativa/:hativa", findByHativa);

router.get("/equipmentAndMaterialsPeriodicInspections/byogda/:ogda", findByOgda);

router.get("/equipmentAndMaterialsPeriodicInspections/bypikod/:pikod", findByPikod);
//find all
router.get("/equipmentAndMaterialsPeriodicInspections", find);
//add
router.post("/equipmentAndMaterialsPeriodicInspections", create); /**/
//update
router.put("/equipmentAndMaterialsPeriodicInspections/:id", update);
//delete
router.delete("/equipmentAndMaterialsPeriodicInspections/:id", remove);

module.exports = router;
