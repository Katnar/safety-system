const GroundingTests = require("../../models/general/groundingTests");
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

  GroundingTests.aggregate(finalquerry)
    .then((result) => {
      res.json(result[0]);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
};

exports.find = (req, res) => {
  GroundingTests.find()
    .then((groundingTests) => res.json(groundingTests))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const groundingTests = new GroundingTests(req.body);
  groundingTests.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const groundingTests = req.body;
  GroundingTests.findByIdAndUpdate(req.params.id, groundingTests)
    .then((groundingTests) => res.json(groundingTests))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  GroundingTests.deleteOne({ _id: req.params.id })
    .then((groundingTests) => res.json(groundingTests))
    .catch((err) => res.status(400).json("Error: " + err));
};
