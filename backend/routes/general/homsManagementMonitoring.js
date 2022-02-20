const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
} = require("../../controllers/general/homsManagementMonitoring");

// find spec
router.get("/homsManagementMonitoring/:id", findById);
//find all
router.get("/homsManagementMonitoring", find);
//add
router.post("/homsManagementMonitoring", create); /**/
//update
router.put("/homsManagementMonitoring/:id", update);
//delete
router.delete("/homsManagementMonitoring/:id", remove);

module.exports = router;
