const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//מעקב וועדות בטיחות חודשיות
const monthlySafetyCommitteesMonitoringDeleteSchema = new mongoose.Schema({
  unit: { type: String },
  date: { type: Date },
  committeeExecuter: { type: String },
  documentUpload: { type: String },
  gdod: { type: String },
  createdAt: { type: Date },
  deletedAt: { type: Date },
});

const monthlySafetyCommitteesMonitoringDelete = mongoose.model(
  "monthlySafetyCommitteesMonitoringDelete",
  monthlySafetyCommitteesMonitoringDeleteSchema
);

module.exports = monthlySafetyCommitteesMonitoringDelete;
