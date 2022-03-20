const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const questionSchema = new mongoose.Schema({
  user: { type: _id },
  text: { type: String },
  createdAt: { type: DataView },
  answer: { type: _id },
});

const question = mongoose.model("question", questionSchema);

module.exports = question;
