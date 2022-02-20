const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//מעקב ניהול חומ"ס
const homsManagementMonitoringSchema = new mongoose.Schema({
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
