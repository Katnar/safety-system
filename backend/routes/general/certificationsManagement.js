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
} = require("../../controllers/general/certificationsManagement");

// find spec
router.get("/certificationsManagement/:id", findById);
//find all
router.get("/certificationsManagement/bygdod/:gdod", findByGdod);

router.get("/certificationsManagement/byhativa/:hativa", findByHativa);

router.get("/certificationsManagement/byogda/:ogda", findByOgda);

router.get("/certificationsManagement/bypikod/:pikod", findByPikod);

router.get("/certificationsManagement", find);
//add
router.post("/certificationsManagement", create); /**/
//update
router.put("/certificationsManagement/:id", update);
//delete
router.delete("/certificationsManagement/:id", remove);

module.exports = router;
