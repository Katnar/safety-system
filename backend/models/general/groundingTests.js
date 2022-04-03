const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//בדיקת הארקות חשמל ומבנים
const groundingTestsSchema = new mongoose.Schema({
  buildingName: { type: String },
  testDate: { type: Date },
  nextTestDate: { type: Date },
  fit: { type: String },
  documentUpload: { type: String },
  gdod: { type: String },
});

const groundingTests = mongoose.model("groundingTests", groundingTestsSchema);

module.exports = groundingTests;
