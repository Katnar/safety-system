const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const personalProtectiveEquipmentMonitoringSchema = new mongoose.Schema({
  //פיקוח תעסוקתי
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
