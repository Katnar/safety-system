const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const answerSchema = new mongoose.Schema({
  user: { type: _id },
  text: { type: String },
  createdAt: { type: DataView },
  question: { type: _id },
});

const answer = mongoose.model("answer", answerSchema);

module.exports = answer;
