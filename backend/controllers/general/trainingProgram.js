const TrainingProgram = require("../../models/general/trainingProgram");
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

  TrainingProgram.aggregate(finalquerry)
    .then((result) => {
      res.json(result[0]);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
};

exports.find = (req, res) => {
  TrainingProgram.find()
    .then((trainingProgram) => res.json(trainingProgram))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const trainingProgram = new TrainingProgram(req.body);
  trainingProgram.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const trainingProgram = req.body;
  TrainingProgram.findByIdAndUpdate(req.params.id, trainingProgram)
    .then((trainingProgram) => res.json(trainingProgram))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  TrainingProgram.deleteOne({ _id: req.params.id })
    .then((trainingProgram) => res.json(trainingProgram))
    .catch((err) => res.status(400).json("Error: " + err));
};
