const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//מעקב ציוד מגן אישי
const personalProtectiveEquipmentMonitoringDeleteSchema = new mongoose.Schema({
  msd: { type: Number },
  equipmentName: { type: String },
  mkt: { type: String },
  amount: { type: Number },
  equipmentLocation: { type: String },
  testDate: { type: Date },
  equipmentGuarantor: { type: String },
  comments: { type: String },
  gdod: { type: String },
  createdAt: { type: Date },
  changedAt: { type: Date },
});

const personalProtectiveEquipmentMonitoringDelete = mongoose.model(
  "personalProtectiveEquipmentMonitoringDelete",
  personalProtectiveEquipmentMonitoringDeleteSchema
);

module.exports = personalProtectiveEquipmentMonitoringDelete;
