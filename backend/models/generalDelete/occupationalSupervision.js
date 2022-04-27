const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//פיקוח תעסוקתי
const occupationalSupervisionDeleteSchema = new mongoose.Schema({
  personalNumber: { type: String },
  id: { type: Number },
  fullName: { type: String },
  rank: { type: String },
  profession: { type: String },
  harmfulCause: { type: String },
  legislationAndMilitaryOrders: { type: String },
  frequencyOfTests: { type: String },
  lastExecutionDate: { type: Date },
  nextTestDate: { type: String },
  fit: { type: String },
  documentUpload: { type: String },
  gdod: { type: String },
  createdAt: { type: Date },
  deletedAt: { type: Date },
});

const occupationalSupervisionDelete = mongoose.model(
  "occupationalSupervisionDelete",
  occupationalSupervisionDeleteSchema
);

module.exports = occupationalSupervisionDelete;
