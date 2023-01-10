const HomsManagementMonitoring = require("../../models/general/homsManagementMonitoring");
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

  HomsManagementMonitoring.aggregate(finalquerry)
    .then((result) => {
      res.json(result[0]);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
};

exports.find = (req, res) => {
  HomsManagementMonitoring.find()
    .then((homsManagementMonitoring) => res.json(homsManagementMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const homsManagementMonitoring = new HomsManagementMonitoring(req.body);
  homsManagementMonitoring.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const homsManagementMonitoring = req.body;
  HomsManagementMonitoring.findByIdAndUpdate(
    req.params.id,
    homsManagementMonitoring
  )
    .then((homsManagementMonitoring) => res.json(homsManagementMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  HomsManagementMonitoring.deleteOne({ _id: req.params.id })
    .then((homsManagementMonitoring) => res.json(homsManagementMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};
