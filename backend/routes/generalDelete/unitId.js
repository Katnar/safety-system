const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/general/unitId");

// find spec
router.get("/unitId/:id", findById);
//find all
router.get("/unitId", find);
//add
router.post("/unitId", create); /**/
//update
router.put("/unitId/:id", update);
//delete
router.delete("/unitId/:id", remove);

module.exports = router;
