const RiskManagementMonitoring = require("../../models/general/riskManagementMonitoring");
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

  RiskManagementMonitoring.aggregate(finalquerry)
    .then((result) => {
      res.json(result[0]);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
};

exports.find = (req, res) => {
  RiskManagementMonitoring.find()
    .then((riskManagementMonitoring) => res.json(riskManagementMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const riskManagementMonitoring = new RiskManagementMonitoring(req.body);
  riskManagementMonitoring.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const riskManagementMonitoring = req.body;
  RiskManagementMonitoring.findByIdAndUpdate(
    req.params.id,
    riskManagementMonitoring
  )
    .then((riskManagementMonitoring) => res.json(riskManagementMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  RiskManagementMonitoring.deleteOne({ _id: req.params.id })
    .then((riskManagementMonitoring) => res.json(riskManagementMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};
