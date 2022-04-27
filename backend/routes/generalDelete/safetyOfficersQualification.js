const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/generalDelete/safetyOfficersQualification");

// find spec
router.get("/safetyOfficersQualificationDelete/:id", findById);
//find all
router.get("/safetyOfficersQualificationDelete", find);
//add
router.post("/safetyOfficersQualificationDelete", create); /**/
//update
router.put(
  "/safetyOfficersQualificationDelete/:id",
  update
);
//delete
router.delete("/safetyOfficersQualificationDelete/:id", remove);

module.exports = router;
