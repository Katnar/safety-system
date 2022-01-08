const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const trainingProgramSchema = new mongoose.Schema({
  trainingDate: { type: Date },
  trainingSubject: { type: String },
  presentationUpload: { type: String },
  requireTest: { type: Boolean },
  requiredWorkersList: { type: [String] },
  trainingStatus: { type: String },
  requiredWorkersStatus: { type: [String] },
});

const trainingProgram = mongoose.model(
  "trainingProgram",
  trainingProgramSchema
);

module.exports = trainingProgram;
