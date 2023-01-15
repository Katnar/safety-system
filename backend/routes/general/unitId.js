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
} = require("../../controllers/general/unitId");

// find spec
router.get("/unitId/:id", findById);
//findbyrole
router.get("/unitId/bygdod/:gdod", findByGdod);

router.get("/unitId/byhativa/:hativa", findByHativa);

router.get("/unitId/byogda/:ogda", findByOgda);

router.get("/unitId/bypikod/:pikod", findByPikod);
//find all
router.get("/unitId", find);
//add
router.post("/unitId", create); /**/
//update
router.put("/unitId/:id", update);
//delete
router.delete("/unitId/:id", remove);

module.exports = router;
