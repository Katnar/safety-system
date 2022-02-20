const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//בדיקות תקופתיות למכונות וציוד
const machinesAndEquipmentPeriodicInspectionsSchema = new mongoose.Schema({
  equipmentType: { type: String },
  meanName: { type: String },
  mstb: { type: Number },
  mkt: { type: Number },
  manufacturer: { type: String },
  testDate: { type: Date },
  nextTestDate: { type: Date },
  findings: { type: String },
  comments: { type: String },
  meanQuantity: { type: Number },
  documentUpload: { type: String },
  gdod: { type: String },
});

const machinesAndEquipmentPeriodicInspections = mongoose.model(
  "machinesAndEquipmentPeriodicInspections",
  machinesAndEquipmentPeriodicInspectionsSchema
);

module.exports = machinesAndEquipmentPeriodicInspections;
