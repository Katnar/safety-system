const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//מעקב ציוד מגן אישי
const personalProtectiveEquipmentMonitoringSchema = new mongoose.Schema({
  msd: { type: Number },
  equipmentName: { type: String },
  mkt: { type: String },
  amount: { type: Number },
  equipmentLocation: { type: String },
  testDate: { type: Date },
  equipmentGuarantor: { type: String },
  comments: { type: String },
  gdod: { type: String },
});

const personalProtectiveEquipmentMonitoring = mongoose.model(
  "personalProtectiveEquipmentMonitoring",
  personalProtectiveEquipmentMonitoringSchema
);

module.exports = personalProtectiveEquipmentMonitoring;
