const HazardsMonitoring = require("../../models/general/hazardsMonitoring");
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

  HazardsMonitoring.aggregate(finalquerry)
    .then((result) => {
      res.json(result[0]);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
};

exports.find = (req, res) => {
  HazardsMonitoring.find()
    .then((hazardsMonitoring) => res.json(hazardsMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const hazardsMonitoring = new HazardsMonitoring(req.body);
  hazardsMonitoring.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const hazardsMonitoring = req.body;
  HazardsMonitoring.findByIdAndUpdate(req.params.id, hazardsMonitoring)
    .then((hazardsMonitoring) => res.json(hazardsMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  HazardsMonitoring.deleteOne({ _id: req.params.id })
    .then((hazardsMonitoring) => res.json(hazardsMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};
