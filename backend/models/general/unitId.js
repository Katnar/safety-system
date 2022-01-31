const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const unitIdSchema = new mongoose.Schema({
  name: { type: String },
  location: { type: String },
  unitStructure: { type: String },
  unitMeans: { type: [String] },
  mainOccupation: { type: String },
  unitStructureTree: { type: String },
  teneStructureTree: { type: String },
  gdod: {type: String},
});

const UnitId = mongoose.model("UnitId", unitIdSchema);

module.exports = UnitId;
