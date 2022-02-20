const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//מעקב וועדות בטיחות חודשיות
const monthlySafetyCommitteesMonitoringSchema = new mongoose.Schema({
  unit: { type: String },
  date: { type: Date },
  committeeExecuter: { type: String },
  documentUpload: { type: String },
  gdod: { type: String },
});

const monthlySafetyCommitteesMonitoring = mongoose.model(
  "monthlySafetyCommitteesMonitoring",
  monthlySafetyCommitteesMonitoringSchema
);

module.exports = monthlySafetyCommitteesMonitoring;
