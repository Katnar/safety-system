const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const safetyOfficersQualificationSchema = new mongoose.Schema({
  personalNumber: { type: String },
  id: { type: Number },
  fullName: { type: String },
  certificateIssuingDate: { type: Date },
  numberOfSeminarDays: { type: Number },
  gdod: {type: String},
});

const safetyOfficersQualification = mongoose.model(
  "safetyOfficersQualification",
  safetyOfficersQualificationSchema
);

module.exports = safetyOfficersQualification;
