const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema({
  personal_number: {
    type: String,
    required: true,
  },
  id_number: {
    type: String,
    required: true,
  },
  full_name: {
    type: String,
    required: true,
  },
  rank: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  certification: {
    type: String,
    required: true,
  },
  expiry: {
    type: String,
    required: true,
  },

  documents: {
    type: String,
    required: false,
  },
});

const Certification = mongoose.model("certification", certificationSchema);
module.exports = Certification;
