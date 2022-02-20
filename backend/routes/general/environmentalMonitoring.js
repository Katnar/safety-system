const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/general/environmentalMonitoring");

// find spec
router.get("/environmentalMonitoring/:id", findById);
//find all
router.get("/environmentalMonitoring", find);
//add
router.post("/environmentalMonitoring", create); /**/
//update
router.put("/environmentalMonitoring/:id", update);
//delete
router.delete("/environmentalMonitoring/:id", remove);

module.exports = router;
