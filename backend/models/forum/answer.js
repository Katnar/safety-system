const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const answerSchema = new mongoose.Schema({
  user: { type: ObjectId, ref: "user"},
  text: { type: String },
  createdAt: { type: Date },
  question: { type: ObjectId, ref: "question"},
});

const answer = mongoose.model("answer", answerSchema);

module.exports = answer;
