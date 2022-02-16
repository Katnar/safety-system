const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/general/safetyOfficersQualification");

// find spec
router.get("/safetyOfficersQualification/:id", findById);
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
