const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//בדיקת הארקות חשמל ומבנים
const groundingTestsDeleteSchema = new mongoose.Schema({
  buildingName: { type: String },
  testDate: { type: Date },
  nextTestDate: { type: Date },
  fit: { type: String },
  documentUpload: { type: String },
  gdod: { type: String },
  createdAt: { type: Date },
  changedAt: { type: Date },
});

const groundingTestsDelete = mongoose.model("groundingTestsDelete", groundingTestsDeleteSchema);

module.exports = groundingTestsDelete;
