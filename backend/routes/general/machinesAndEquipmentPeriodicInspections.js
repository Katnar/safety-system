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
} = require("../../controllers/general/machinesAndEquipmentPeriodicInspections");

// find spec
router.get("/machinesAndEquipmentPeriodicInspections/:id", findById);
//findbyrole
router.get("/machinesAndEquipmentPeriodicInspections/bygdod/:gdod", findByGdod);

router.get("/machinesAndEquipmentPeriodicInspections/byhativa/:hativa", findByHativa);

router.get("/machinesAndEquipmentPeriodicInspections/byogda/:ogda", findByOgda);

router.get("/machinesAndEquipmentPeriodicInspections/bypikod/:pikod", findByPikod);
//find all
router.get("/machinesAndEquipmentPeriodicInspections", find);
//add
router.post("/machinesAndEquipmentPeriodicInspections", create); /**/
//update
router.put("/machinesAndEquipmentPeriodicInspections/:id", update);
//delete
router.delete("/machinesAndEquipmentPeriodicInspections/:id", remove);

module.exports = router;
