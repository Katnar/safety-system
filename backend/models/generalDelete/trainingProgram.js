const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//תכנית הדרכות
const trainingProgramDeleteSchema = new mongoose.Schema({
  trainingDate: { type: Date },
  trainingSubject: { type: String },
  presentationUpload: { type: String },
  requireTest: { type: String },
  requiredWorkersList: { type: [String] },
  trainingStatus: { type: String },
  requiredWorkersStatus: { type: [String] },
  gdod: {type: String},
  deletedAt: { type: Date },
}, {timestamps: true});

const trainingProgramDelete = mongoose.model(
  "trainingProgramDelete",
  trainingProgramDeleteSchema
);

module.exports = trainingProgramDelete;
