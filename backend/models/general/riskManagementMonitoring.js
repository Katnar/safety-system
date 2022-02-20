const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//מעקב ניהול סיכונים
const riskManagementMonitoringSchema = new mongoose.Schema({
  processStage: { type: String },
  riskFactor: { type: String },
  factorMfive: { type: String },
  initialRiskAssessment: { type: String },
  preventiveActions: { type: String },
  secondRiskAssessment: { type: String },
  responsibility: { type: String },
  tgb: { type: String },
  status: { type: String },
  gdod: { type: String },
});

const riskManagementMonitoring = mongoose.model(
  "riskManagementMonitoring",
  riskManagementMonitoringSchema
);

module.exports = riskManagementMonitoring;
