const OccupationalSupervision = require("../../models/general/occupationalSupervision");
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

  OccupationalSupervision.aggregate(finalquerry)
    .then((result) => {
      res.json(result[0]);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
};

exports.findByPn = async (req, res) => {
  console.log(req.body.pn)
  OccupationalSupervision.find({personalNumber: req.params.pn})
  .then((occupationalSupervision) => res.json(occupationalSupervision))
  .catch((err) => res.status(400).json("Error: " + err));
};

exports.findByGdod = async (req, res) => {
  const occupationalSupervision = await OccupationalSupervision.find().where({
    gdod: req.params.gdod,
  });

  if (!occupationalSupervision) {
    res.status(500).json({ success: false });
  }
  res.send(occupationalSupervision);
};

exports.findByHativa = async (req, res) => {
  const occupationalSupervision = await OccupationalSupervision.find().where({
    hativa: req.params.hativa,
  });

  if (!occupationalSupervision) {
    res.status(500).json({ success: false });
  }
  res.send(occupationalSupervision);
};

exports.findByOgda = async (req, res) => {
  const occupationalSupervision = await OccupationalSupervision.find().where({
    ogda: req.params.ogda,
  });

  if (!occupationalSupervision) {
    res.status(500).json({ success: false });
  }
  res.send(occupationalSupervision);
};

exports.findByPikod = async (req, res) => {
  const occupationalSupervision = await OccupationalSupervision.find().where({
    pikod: req.params.pikod,
  });

  if (!occupationalSupervision) {
    res.status(500).json({ success: false });
  }
  res.send(occupationalSupervision);
};

exports.find = (req, res) => {
  OccupationalSupervision.find()
    .then((occupationalSupervision) => res.json(occupationalSupervision))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const occupationalSupervision = new OccupationalSupervision(req.body);
  occupationalSupervision.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const occupationalSupervision = req.body;
  OccupationalSupervision.findByIdAndUpdate(
    req.params.id,
    occupationalSupervision
  )
    .then((occupationalSupervision) => res.json(occupationalSupervision))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  OccupationalSupervision.deleteOne({ _id: req.params.id })
    .then((occupationalSupervision) => res.json(occupationalSupervision))
    .catch((err) => res.status(400).json("Error: " + err));
};
