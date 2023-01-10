const EnvironmentalMonitoring = require("../../models/general/environmentalMonitoring");
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

  EnvironmentalMonitoring.aggregate(finalquerry)
    .then((result) => {
      res.json(result[0]);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
};

exports.findByGdod = async (req, res) => {
  const environmentalMonitoring = await EnvironmentalMonitoring.find().where({
    gdod: req.params.gdod,
  });

  if (!environmentalMonitoring) {
    res.status(500).json({ success: false });
  }
  res.send(environmentalMonitoring);
};

exports.findByHativa = async (req, res) => {
  const environmentalMonitoring = await EnvironmentalMonitoring.find().where({
    hativa: req.params.hativa,
  });

  if (!environmentalMonitoring) {
    res.status(500).json({ success: false });
  }
  res.send(environmentalMonitoring);
};

exports.findByOgda = async (req, res) => {
  const environmentalMonitoring = await EnvironmentalMonitoring.find().where({
    ogda: req.params.ogda,
  });

  if (!environmentalMonitoring) {
    res.status(500).json({ success: false });
  }
  res.send(environmentalMonitoring);
};

exports.findByPikod = async (req, res) => {
  const environmentalMonitoring = await EnvironmentalMonitoring.find().where({
    pikod: req.params.pikod,
  });

  if (!environmentalMonitoring) {
    res.status(500).json({ success: false });
  }
  res.send(environmentalMonitoring);
};

exports.find = (req, res) => {
  EnvironmentalMonitoring.find()
    .then((environmentalMonitoring) => res.json(environmentalMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const environmentalMonitoring = new EnvironmentalMonitoring(req.body);
  environmentalMonitoring.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const environmentalMonitoring = req.body;
  EnvironmentalMonitoring.findByIdAndUpdate(
    req.params.id,
    environmentalMonitoring
  )
    .then((environmentalMonitoring) => res.json(environmentalMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  EnvironmentalMonitoring.deleteOne({ _id: req.params.id })
    .then((environmentalMonitoring) => res.json(environmentalMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};
