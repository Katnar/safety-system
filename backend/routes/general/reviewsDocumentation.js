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
} = require("../../controllers/general/reviewsDocumentation");

// find spec
router.get("/reviewsDocumentation/:id", findById);
//findbyrole
router.get("/reviewsDocumentation/bygdod/:gdod", findByGdod);

router.get("/reviewsDocumentation/byhativa/:hativa", findByHativa);

router.get("/reviewsDocumentation/byogda/:ogda", findByOgda);

router.get("/reviewsDocumentation/bypikod/:pikod", findByPikod);
//find all
router.get("/reviewsDocumentation", find);
//add
router.post("/reviewsDocumentation", create); /**/
//update
router.put("/reviewsDocumentation/:id", update);
//delete
router.delete("/reviewsDocumentation/:id", remove);

module.exports = router;
