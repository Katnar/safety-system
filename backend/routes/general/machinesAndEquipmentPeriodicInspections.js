const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/general/machinesAndEquipmentPeriodicInspections");

// find spec
router.get("/machinesAndEquipmentPeriodicInspections/:id", findById);
//find all
router.get("/machinesAndEquipmentPeriodicInspections", find);
//add
router.post("/machinesAndEquipmentPeriodicInspections", create); /**/
//update
router.put(
  "/machinesAndEquipmentPeriodicInspections/:machinesAndEquipmentPeriodicInspectionsId",
  update
);
//delete
router.delete("/machinesAndEquipmentPeriodicInspections/:id", remove);

module.exports = router;
