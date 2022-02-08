const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const environmentalMonitoringSchema = new mongoose.Schema({
  harmfulCauses: { type: String },
  locationInUnit: { type: String },
  lastMonitoringDate: { type: Date },
  nextMonitoringDate: { type: Date },
  executionStatus: { type: String },
  surveyDate: { type: Date },
  documentUpload: { type: String },
  gdod: {type: String},
});

const environmentalMonitoring = mongoose.model(
  "environmentalMonitoring",
  environmentalMonitoringSchema
);

module.exports = environmentalMonitoring;
