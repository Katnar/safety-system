const UnitId = require("../../models/general/unitId");
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

  unitId.aggregate(finalquerry)
    .then((result) => {
      res.json(result[0]);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
};

exports.find = (req, res) => {
  UnitId.find()
    .then((unitId) => res.json(unitId))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const unitId = new UnitId(req.body);
  unitId.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const unitId = req.body;
  UnitId.findByIdAndUpdate(
    req.params.id,
    unitId
  )
    .then((unitId) => res.json(unitId))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  UnitId.deleteOne({ _id: req.params.id })
    .then((unitId) => res.json(unitId))
    .catch((err) => res.status(400).json("Error: " + err));
};
