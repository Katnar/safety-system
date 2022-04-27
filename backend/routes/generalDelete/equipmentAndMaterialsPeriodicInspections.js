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
} = require("../../controllers/generalDelete/equipmentAndMaterialsPeriodicInspections");

// find spec
router.get("/equipmentAndMaterialsPeriodicInspectionsDelete/:id", findById);

router.get("/equipmentAndMaterialsPeriodicInspectionsDelete/bygdod/:gdod", findByGdod);

router.get("/equipmentAndMaterialsPeriodicInspectionsDelete/byhativa/:hativa", findByHativa);

router.get("/equipmentAndMaterialsPeriodicInspectionsDelete/byogda/:ogda", findByOgda);

router.get("/equipmentAndMaterialsPeriodicInspectionsDelete/bypikod/:pikod", findByPikod);
//find all
router.get("/equipmentAndMaterialsPeriodicInspectionsDelete", find);
//add
router.post("/equipmentAndMaterialsPeriodicInspectionsDelete", create); /**/
//update
router.put("/equipmentAndMaterialsPeriodicInspectionsDelete/:id", update);
//delete
router.delete("/equipmentAndMaterialsPeriodicInspectionsDelete/:id", remove);

module.exports = router;
