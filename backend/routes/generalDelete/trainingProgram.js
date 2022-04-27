const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/general/trainingProgram");

// find spec
router.get("/trainingProgram/:id", findById);
//find all
router.get("/trainingProgram", find);
//add
router.post("/trainingProgram", create); /**/
//update
router.put("/trainingProgram/:id", update);
//delete
router.delete("/trainingProgram/:id", remove);

module.exports = router;
