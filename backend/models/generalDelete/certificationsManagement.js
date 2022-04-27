const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//ניהול הסמכות
const certificationsManagementDeleteSchema = new mongoose.Schema({
  personalNumber: { type: String },
  id: { type: Number },
  fullName: { type: String },
  rank: { type: String },
  profession: { type: String },
  certification: { type: String },
  certificationValidity: { type: Date },
  documentUpload: { type: String },
  gdod: { type: String },
  createdAt: { type: Date },
  deletedAt: { type: Date },
});

const certificationsManagementDelete = mongoose.model(
  "certificationsManagementDelete",
  certificationsManagementDeleteSchema
);

module.exports = certificationsManagementDelete;
