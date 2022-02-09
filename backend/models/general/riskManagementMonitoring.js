const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const riskManagementMonitoringSchema = new mongoose.Schema({
  processStage: { type: String },
  riskFactor: { type: String },
  factorM5: { type: String },
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
