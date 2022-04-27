const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/generalDelete/unitId");

// find spec
router.get("/unitIdDelete/:id", findById);
//find all
router.get("/unitIdDelete", find);
//add
router.post("/unitIdDelete", create); /**/
//update
router.put("/unitIdDelete/:id", update);
//delete
router.delete("/unitIdDelete/:id", remove);

module.exports = router;
