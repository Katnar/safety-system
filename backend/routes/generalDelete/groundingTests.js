const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/generalDelete/groundingTests");

// find spec
router.get("/groundingTestsDelete/:id", findById);
//find all
router.get("/groundingTestsDelete", find);
//add
router.post("/groundingTestsDelete", create); /**/
//update
router.put("/groundingTestsDelete/:id", update);
//delete
router.delete("/groundingTestsDelete/:id", remove);

module.exports = router;
