const express = require("express");
const router = express.Router();

const {
  create,
  find,
  update,
  remove,
  findById,
  smartQuestions,
} = require("../../controllers/forum/question");

// find spec
router.get("/question/:id", findById);

router.get("/smartQuestions", smartQuestions);
//find all
router.get("/question", find);
//add
router.post("/question", create); /**/
//update
router.put("/question/:id", update);
//delete
router.delete("/question/:id", remove);

module.exports = router;
