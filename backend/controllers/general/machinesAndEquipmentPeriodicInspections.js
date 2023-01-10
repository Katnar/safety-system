const MachinesAndEquipmentPeriodicInspections = require("../../models/general/machinesAndEquipmentPeriodicInspections");
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

  MachinesAndEquipmentPeriodicInspections.aggregate(finalquerry)
    .then((result) => {
      res.json(result[0]);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
};

exports.find = (req, res) => {
  MachinesAndEquipmentPeriodicInspections.find()
    .then((machinesAndEquipmentPeriodicInspections) =>
      res.json(machinesAndEquipmentPeriodicInspections)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const machinesAndEquipmentPeriodicInspections =
    new MachinesAndEquipmentPeriodicInspections(req.body);
  machinesAndEquipmentPeriodicInspections.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const machinesAndEquipmentPeriodicInspections = req.body;
  MachinesAndEquipmentPeriodicInspections.findByIdAndUpdate(
    req.params.id,
    machinesAndEquipmentPeriodicInspections
  )
    .then((machinesAndEquipmentPeriodicInspections) =>
      res.json(machinesAndEquipmentPeriodicInspections)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  MachinesAndEquipmentPeriodicInspections.deleteOne({ _id: req.params.id })
    .then((machinesAndEquipmentPeriodicInspections) =>
      res.json(machinesAndEquipmentPeriodicInspections)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};
