const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/generalDelete/reviewsDocumentation");

// find spec
router.get("/reviewsDocumentationDelete/:id", findById);
//find all
router.get("/reviewsDocumentationDelete", find);
//add
router.post("/reviewsDocumentationDelete", create); /**/
//update
router.put("/reviewsDocumentationDelete/:id", update);
//delete
router.delete("/reviewsDocumentationDelete/:id", remove);

module.exports = router;
