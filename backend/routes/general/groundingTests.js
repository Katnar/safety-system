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
} = require("../../controllers/general/groundingTests");

// find spec
router.get("/groundingTests/:id", findById);
//findbyrole
router.get("/groundingTests/bygdod/:gdod", findByGdod);

router.get("/groundingTests/byhativa/:hativa", findByHativa);

router.get("/groundingTests/byogda/:ogda", findByOgda);

router.get("/groundingTests/bypikod/:pikod", findByPikod);
//find all
router.get("/groundingTests", find);
//add
router.post("/groundingTests", create); /**/
//update
router.put("/groundingTests/:id", update);
//delete
router.delete("/groundingTests/:id", remove);

module.exports = router;
