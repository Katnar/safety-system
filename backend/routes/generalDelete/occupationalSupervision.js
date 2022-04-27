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
} = require("../../controllers/generalDelete/occupationalSupervision");

// find spec
router.get("/occupationalSupervisionDelete/:id", findById);

router.get("/occupationalSupervisionDelete/bygdod/:gdod", findByGdod);

router.get("/occupationalSupervisionDelete/byhativa/:hativa", findByHativa);

router.get("/occupationalSupervisionDelete/byogda/:ogda", findByOgda);

router.get("/occupationalSupervisionDelete/bypikod/:pikod", findByPikod);
//find all
router.get("/occupationalSupervisionDelete", find);
//add
router.post("/occupationalSupervisionDelete", create); /**/
//update
router.put("/occupationalSupervisionDelete/:id", update);
//delete
router.delete("/occupationalSupervisionDelete/:id", remove);

module.exports = router;
