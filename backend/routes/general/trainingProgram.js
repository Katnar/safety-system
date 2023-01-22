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
} = require("../../controllers/general/trainingProgram");

// find spec
router.get("/trainingProgram/:id", findById);
//findbyrole
router.get("/trainingProgram/bygdod/:gdod", findByGdod);

router.get("/trainingProgram/byhativa/:hativa", findByHativa);

router.get("/trainingProgram/byogda/:ogda", findByOgda);

router.get("/trainingProgram/bypikod/:pikod", findByPikod);
//find all
router.get("/trainingProgram", find);
//add
router.post("/trainingProgram", create); /**/
//update
router.put("/trainingProgram/:id", update);
//delete
router.delete("/trainingProgram/:id", remove);

module.exports = router;
