const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const questionSchema = new mongoose.Schema({
  user: { type: ObjectId, ref: "user"},
  text: { type: String },
  createdAt: { type: DataView },
  answer: { type: ObjectId, ref: "answer"},
});

const question = mongoose.model("question", questionSchema);

module.exports = question;
