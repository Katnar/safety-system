const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/general/riskManagementMonitoring");

// find spec
router.get("/riskManagementMonitoring/:id", findById);
//find all
router.get("/riskManagementMonitoring", find);
//add
router.post("/riskManagementMonitoring", create); /**/
//update
router.put("/riskManagementMonitoring/:id", update);
//delete
router.delete("/riskManagementMonitoring/:id", remove);

module.exports = router;
