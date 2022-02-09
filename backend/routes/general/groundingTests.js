const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/general/groundingTests");

// find spec
router.get("/groundingTests/:id", findById);
//find all
router.get("/groundingTests", find);
//add
router.post("/groundingTests", create); /**/
//update
router.put("/groundingTests/:groundingTestsId", update);
//delete
router.delete("/groundingTests/:id", remove);

module.exports = router;
