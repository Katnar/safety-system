const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/generalDelete/trainingProgram");

// find spec
router.get("/trainingProgramDelete/:id", findById);
//find all
router.get("/trainingProgramDelete", find);
//add
router.post("/trainingProgramDelete", create); /**/
//update
router.put("/trainingProgramDelete/:id", update);
//delete
router.delete("/trainingProgramDelete/:id", remove);

module.exports = router;
