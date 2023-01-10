const PersonalProtectiveEquipmentMonitoring = require("../../models/general/personalProtectiveEquipmentMonitoring");
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

  PersonalProtectiveEquipmentMonitoring.aggregate(finalquerry)
    .then((result) => {
      res.json(result[0]);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
};

exports.find = (req, res) => {
  PersonalProtectiveEquipmentMonitoring.find()
    .then((personalProtectiveEquipmentMonitoring) =>
      res.json(personalProtectiveEquipmentMonitoring)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const personalProtectiveEquipmentMonitoring =
    new PersonalProtectiveEquipmentMonitoring(req.body);
  personalProtectiveEquipmentMonitoring.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const personalProtectiveEquipmentMonitoring = req.body;
  PersonalProtectiveEquipmentMonitoring.findByIdAndUpdate(
    req.params.id,
    personalProtectiveEquipmentMonitoring
  )
    .then((personalProtectiveEquipmentMonitoring) =>
      res.json(personalProtectiveEquipmentMonitoring)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  PersonalProtectiveEquipmentMonitoring.deleteOne({ _id: req.params.id })
    .then((personalProtectiveEquipmentMonitoring) =>
      res.json(personalProtectiveEquipmentMonitoring)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};
