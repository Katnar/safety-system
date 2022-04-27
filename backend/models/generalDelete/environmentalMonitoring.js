const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//ניטורים סביבתיים
const environmentalMonitoringDeleteSchema = new mongoose.Schema({
  harmfulCauses: { type: String },
  locationInUnit: { type: String },
  lastMonitoringDate: { type: Date },
  nextMonitoringDate: { type: Date },
  executionStatus: { type: String },
  surveyDate: { type: Date },
  documentUpload: { type: String },
  gdod: { type: String },
  createdAt: { type: Date },
  deletedAt: { type: Date },
});

const environmentalMonitoringDelete = mongoose.model(
  "environmentalMonitoringDelete",
  environmentalMonitoringDeleteSchema
);

module.exports = environmentalMonitoringDelete;
