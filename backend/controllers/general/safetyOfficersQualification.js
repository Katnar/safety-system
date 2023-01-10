const SafetyOfficersQualification = require("../../models/general/safetyOfficersQualification");
const { readtipul } = require("../../helpers/aggregatehelper");
const mongoose = require('mongoose');

exports.findById = async (req, res) => {
  let tipulfindquerry = readtipul.slice();
  let finalquerry = tipulfindquerry;

  let andquery = [];
  let matchquerry;

  andquery.push({ "_id": mongoose.Types.ObjectId(req.params.id) });

  if (andquery.length != 0) {
    matchquerry = {
      "$match": {
        "$and": andquery
      }
    };
    finalquerry.push(matchquerry)
  }

  // console.log(matchquerry)
  // console.log(andquery)

  SafetyOfficersQualification.aggregate(finalquerry)
    .then((result) => {
      res.json(result[0]);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
};
exports.find = (req, res) => {
  SafetyOfficersQualification.find()
    .then((safetyOfficersQualification) =>
      res.json(safetyOfficersQualification)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const safetyOfficersQualification = new SafetyOfficersQualification(req.body);
  safetyOfficersQualification.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const safetyOfficersQualification = req.body;
  SafetyOfficersQualification.findByIdAndUpdate(req.params.id, safetyOfficersQualification)
    .then((safetyOfficersQualification) =>
      res.json(safetyOfficersQualification)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  SafetyOfficersQualification.deleteOne({ _id: req.params.id })
    .then((safetyOfficersQualification) =>
      res.json(safetyOfficersQualification)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};
