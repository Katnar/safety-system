const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//מעקב סקר מפגעים
const hazardsMonitoringDeleteSchema = new mongoose.Schema({
  personalNumber: { type: String },
  rank: { type: String },
  fullName: { type: String },
  date: { type: Date },
  surveyDetails: { type: String },
  digitalSignature: { type: String },
  msd: { type: String },
  location: { type: String },
  hazardType: { type: String },
  hazardDescription: { type: String },
  repairActions: { type: String },
  repair: { type: String },
  executionSchedule: { type: String },
  repairControl: { type: String },
  status: { type: String },
  gdod: { type: String },
  createdAt: { type: Date },
  changedAt: { type: Date },
});

const hazardsMonitoringDelete = mongoose.model(
  "hazardsMonitoringDelete",
  hazardsMonitoringDeleteSchema
);

module.exports = hazardsMonitoringDelete;
