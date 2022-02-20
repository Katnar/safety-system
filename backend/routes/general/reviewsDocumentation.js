const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/general/reviewsDocumentation");

// find spec
router.get("/reviewsDocumentation/:id", findById);
//find all
router.get("/reviewsDocumentation", find);
//add
router.post("/reviewsDocumentation", create); /**/
//update
router.put("/reviewsDocumentation/:id", update);
//delete
router.delete("/reviewsDocumentation/:id", remove);

module.exports = router;
