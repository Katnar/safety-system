const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const reviewsDocumentationSchema = new mongoose.Schema({
  //פיקוח תעסוקתי
  date: { type: Date },
  location: { type: String },
  documentUpload: { type: String },
  gdod: { type: String },
});

const reviewsDocumentation = mongoose.model(
  "reviewsDocumentation",
  reviewsDocumentationSchema
);

module.exports = reviewsDocumentation;
