const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//ניהול הסמכות
const certificationsManagementSchema = new mongoose.Schema({
  personalNumber: { type: String },
  id: { type: Number },
  fullName: { type: String },
  rank: { type: String },
  profession: { type: String },
  certification: { type: String },
  certificationValidity: { type: Date },
  documentUpload: { type: String },
  gdod: { type: String },
});

const certificationsManagement = mongoose.model(
  "certificationsManagement",
  certificationsManagementSchema
);

module.exports = certificationsManagement;
