const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//פיקוח תעסוקתי
const occupationalSupervisionSchema = new mongoose.Schema({
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
});

const occupationalSupervision = mongoose.model(
  "occupationalSupervision",
  occupationalSupervisionSchema
);

module.exports = occupationalSupervision;
