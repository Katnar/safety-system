const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const unitIdDeleteSchema = new mongoose.Schema({
  name: { type: String },
  location: { type: String },
  unitStructure: { type: String },
  unitMeans: { type: [String] },
  mainOccupation: { type: String },
  unitStructureTree: { type: String },
  teneStructureTree: { type: String },
  gdod: {type: String},
  createdAt: { type: Date },
  changedAt: { type: Date },
});

const UnitIdDelete = mongoose.model("UnitIdDelete", unitIdDeleteSchema);

module.exports = UnitIdDelete;
