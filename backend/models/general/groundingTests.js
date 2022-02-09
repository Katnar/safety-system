const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const groundingTestsSchema = new mongoose.Schema({
  //פיקוח תעסוקתי
  buildingName: { type: String },
  testDate: { type: Date },
  nextTestDate: { type: Date },
  fit: { type: String },
  documentUpload: { type: String },
  gdod: { type: String },
});

const groundingTests = mongoose.model("groundingTests", groundingTestsSchema);

module.exports = groundingTests;
