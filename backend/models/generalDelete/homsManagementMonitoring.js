const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//מעקב ניהול חומ"ס
const homsManagementMonitoringDeleteSchema = new mongoose.Schema({
  materialName: { type: String },
  sheetId: { type: Number },
  materialDepartments: { type: String },
  comments: { type: String },
  gdod: { type: String },
  createdAt: { type: Date },
  deletedAt: { type: Date },
});

const homsManagementMonitoringDelete = mongoose.model(
  "homsManagementMonitoringDelete",
  homsManagementMonitoringDeleteSchema
);

module.exports = homsManagementMonitoringDelete;
