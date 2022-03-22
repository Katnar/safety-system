const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const forumSchema = new mongoose.Schema({
  question: { type: ObjectId, ref: "question"},
  answer: [{type: ObjectId, ref: "answer"}],
});

const forum = mongoose.model("forum", forumSchema);

module.exports = forum;