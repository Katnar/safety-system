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
} = require("../../controllers/generalDelete/certificationsManagement");

// find spec
router.get("/certificationsManagementDelete/:id", findById);
//find all
router.get("/certificationsManagementDelete/bygdod/:gdod", findByGdod);

router.get("/certificationsManagementDelete/byhativa/:hativa", findByHativa);

router.get("/certificationsManagementDelete/byogda/:ogda", findByOgda);

router.get("/certificationsManagementDelete/bypikod/:pikod", findByPikod);

router.get("/certificationsManagementDelete", find);
//add
router.post("/certificationsManagementDelete", create); /**/
//update
router.put("/certificationsManagementDelete/:id", update);
//delete
router.delete("/certificationsManagementDelete/:id", remove);

module.exports = router;
