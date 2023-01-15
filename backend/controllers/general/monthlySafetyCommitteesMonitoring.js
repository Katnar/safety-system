const MonthlySafetyCommitteesMonitoring = require("../../models/general/monthlySafetyCommitteesMonitoring");
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

  MonthlySafetyCommitteesMonitoring.aggregate(finalquerry)
    .then((result) => {
      res.json(result[0]);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
};

exports.findByGdod = async (req, res) => {
  let tipulfindquerry = readtipul.slice();
  let finalquerry = tipulfindquerry;

  let andquery = [];
  let matchquerry;

  andquery.push({ "gdod_data._id": req.params.gdod });

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

  MonthlySafetyCommitteesMonitoring.aggregate(finalquerry)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
};

exports.findByHativa = async (req, res) => {
  let tipulfindquerry = readtipul.slice();
  let finalquerry = tipulfindquerry;

  let andquery = [];
  let matchquerry;

  andquery.push({ "hativa_data._id": req.params.hativa });

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

  MonthlySafetyCommitteesMonitoring.aggregate(finalquerry)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
};

exports.findByOgda = async (req, res) => {
  let tipulfindquerry = readtipul.slice();
  let finalquerry = tipulfindquerry;

  let andquery = [];
  let matchquerry;

  andquery.push({ "ogda_data._id": req.params.ogda });

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

  MonthlySafetyCommitteesMonitoring.aggregate(finalquerry)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
};

exports.findByPikod = async (req, res) => {
  let tipulfindquerry = readtipul.slice();
  let finalquerry = tipulfindquerry;

  let andquery = [];
  let matchquerry;

  andquery.push({ "pikod_data._id": req.params.pikod });

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

  MonthlySafetyCommitteesMonitoring.aggregate(finalquerry)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
};

exports.find = (req, res) => {
  let tipulfindquerry = readtipul.slice();
  let finalquerry = tipulfindquerry;

  MonthlySafetyCommitteesMonitoring.aggregate(finalquerry)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
};

exports.create = (req, res) => {
  const monthlySafetyCommitteesMonitoring =
    new MonthlySafetyCommitteesMonitoring(req.body);
  monthlySafetyCommitteesMonitoring.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const monthlySafetyCommitteesMonitoring = req.body;
  MonthlySafetyCommitteesMonitoring.findByIdAndUpdate(
    req.params.id,
    monthlySafetyCommitteesMonitoring
  )
    .then((monthlySafetyCommitteesMonitoring) =>
      res.json(monthlySafetyCommitteesMonitoring)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  MonthlySafetyCommitteesMonitoring.deleteOne({ _id: req.params.id })
    .then((monthlySafetyCommitteesMonitoring) =>
      res.json(monthlySafetyCommitteesMonitoring)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};
