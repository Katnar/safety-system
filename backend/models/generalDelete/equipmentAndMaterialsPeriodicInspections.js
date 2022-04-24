const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//בדיקות תקופתיות לציוד וחומרים
const equipmentAndMaterialsPeriodicInspectionsDeleteSchema = new mongoose.Schema({
  equipmentType: { type: String },
  manufacturer: { type: String },
  testingFrequency: { type: String },
  testDate: { type: Date },
  nextTestDate: { type: Date },
  documentUpload: { type: String },
  gdod: { type: String },
  createdAt: { type: Date },
  changedAt: { type: Date },
});

const equipmentAndMaterialsPeriodicInspectionsDelete = mongoose.model(
  "equipmentAndMaterialsPeriodicInspectionsDelete",
  equipmentAndMaterialsPeriodicInspectionsDeleteSchema
);

module.exports = equipmentAndMaterialsPeriodicInspectionsDelete;
