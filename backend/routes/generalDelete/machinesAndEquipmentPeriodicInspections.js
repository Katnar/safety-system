const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/generalDelete/machinesAndEquipmentPeriodicInspections");

// find spec
router.get("/machinesAndEquipmentPeriodicInspectionsDelete/:id", findById);
//find all
router.get("/machinesAndEquipmentPeriodicInspectionsDelete", find);
//add
router.post("/machinesAndEquipmentPeriodicInspectionsDelete", create); /**/
//update
router.put("/machinesAndEquipmentPeriodicInspectionsDelete/:id", update);
//delete
router.delete("/machinesAndEquipmentPeriodicInspectionsDelete/:id", remove);

module.exports = router;
