const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const homsManagementMonitoringSchema = new mongoose.Schema({
  //פיקוח תעסוקתי
  materialName: { type: String },
  sheetId: { type: Number },
  materialDepartments: { type: String },
  comments: { type: String },
  gdod: { type: String },
});

const homsManagementMonitoring = mongoose.model(
  "homsManagementMonitoring",
  homsManagementMonitoringSchema
);

module.exports = homsManagementMonitoring;
