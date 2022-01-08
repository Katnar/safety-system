const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/general/occupationalSupervision");

// find spec
router.get("/occupationalSupervision/:id", findById);
//find all
router.get("/occupationalSupervision", find);
//add
router.post("/occupationalSupervision", create); /**/
//update
router.put("/occupationalSupervision/:occupationalSupervisionId", update);
//delete
router.delete("/occupationalSupervision/:id", remove);

module.exports = router;
