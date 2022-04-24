const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//תיעוד ביקורות
const reviewsDocumentationDeleteSchema = new mongoose.Schema({
  date: { type: Date },
  location: { type: String },
  documentUpload: { type: String },
  gdod: { type: String },
  createdAt: { type: Date },
  changedAt: { type: Date },
});

const reviewsDocumentationDelete = mongoose.model(
  "reviewsDocumentationDelete",
  reviewsDocumentationDeleteSchema
);

module.exports = reviewsDocumentationDelete;
