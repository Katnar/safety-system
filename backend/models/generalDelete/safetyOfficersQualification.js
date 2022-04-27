const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//כשירות ממונים על הבטיחות
const safetyOfficersQualificationDeleteSchema = new mongoose.Schema({
  personalNumber: { type: String },
  id: { type: Number },
  fullName: { type: String },
  certificateIssuingDate: { type: Date },
  numberOfSeminarDays: { type: Number },
  gdod: { type: String },
  createdAt: { type: Date },
  deletedAt: { type: Date },
});

const safetyOfficersQualificationDelete = mongoose.model(
  "safetyOfficersQualificationDelete",
  safetyOfficersQualificationDeleteSchema
);

module.exports = safetyOfficersQualificationDelete;
