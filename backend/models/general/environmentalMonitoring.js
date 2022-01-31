const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const certificationsManagementSchema = new mongoose.Schema({
  harmfulCauses: { type: String },
  locationInUnit: { type: String },
  lastMonitoringDate: { type: Date },
  nextMonitoringDate: { type: Date },
  executionStatus: { type: String },
  surveyDate: { type: Date },
  documentUpload: { type: String },
  gdod: {type: String},
});

const certificationsManagement = mongoose.model(
  "certificationsManagement",
  certificationsManagementSchema
);

module.exports = certificationsManagement;
