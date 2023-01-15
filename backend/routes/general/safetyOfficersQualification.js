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
} = require("../../controllers/general/safetyOfficersQualification");

// find spec
router.get("/safetyOfficersQualification/:id", findById);
//findbyrole
router.get("/safetyOfficersQualification/bygdod/:gdod", findByGdod);

router.get("/safetyOfficersQualification/byhativa/:hativa", findByHativa);

router.get("/safetyOfficersQualification/byogda/:ogda", findByOgda);

router.get("/safetyOfficersQualification/bypikod/:pikod", findByPikod);
//find all
router.get("/safetyOfficersQualification", find);
//add
router.post("/safetyOfficersQualification", create); /**/
//update
router.put(
  "/safetyOfficersQualification/:id",
  update
);
//delete
router.delete("/safetyOfficersQualification/:id", remove);

module.exports = router;
