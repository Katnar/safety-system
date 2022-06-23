const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
  findByPn,
  findByGdod,
  findByHativa,
  findByOgda,
  findByPikod,
} = require("../../controllers/general/occupationalSupervision");

// find spec
router.get("/occupationalSupervision/:id", findById);

router.get("/occupationalSupervision", findByPn);

router.get("/occupationalSupervision/bygdod/:gdod", findByGdod);

router.get("/occupationalSupervision/byhativa/:hativa", findByHativa);

router.get("/occupationalSupervision/byogda/:ogda", findByOgda);

router.get("/occupationalSupervision/bypikod/:pikod", findByPikod);
//find all
router.get("/occupationalSupervision", find);
//add
router.post("/occupationalSupervision", create); /**/
//update
router.put("/occupationalSupervision/:id", update);
//delete
router.delete("/occupationalSupervision/:id", remove);

module.exports = router;
