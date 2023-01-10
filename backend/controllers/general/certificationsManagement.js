const CertificationsManagement = require("../../models/general/certificationsManagement");
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

  CertificationsManagement.aggregate(finalquerry)
    .then((result) => {
      res.json(result[0]);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
};

exports.findByGdod = async (req, res) => {
  const certificationsManagement = await CertificationsManagement.find().where({
    gdod: req.params.gdod,
  });

  if (!certificationsManagement) {
    res.status(500).json({ success: false });
  }
  res.send(certificationsManagement);
};

exports.findByHativa = async (req, res) => {
  const certificationsManagement = await CertificationsManagement.find().where({
    hativa: req.params.hativa,
  });

  if (!certificationsManagement) {
    res.status(500).json({ success: false });
  }
  res.send(certificationsManagement);
};

exports.findByOgda = async (req, res) => {
  const certificationsManagement = await CertificationsManagement.find().where({
    ogda: req.params.ogda,
  });

  if (!certificationsManagement) {
    res.status(500).json({ success: false });
  }
  res.send(certificationsManagement);
};

exports.findByPikod = async (req, res) => {
  const certificationsManagement = await CertificationsManagement.find().where({
    pikod: req.params.pikod,
  });

  if (!certificationsManagement) {
    res.status(500).json({ success: false });
  }
  res.send(certificationsManagement);
};

exports.find = (req, res) => {
  CertificationsManagement.find()
    .then((certificationsManagement) => res.json(certificationsManagement))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const certificationsManagement = new CertificationsManagement(req.body);
  certificationsManagement.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const certificationsManagement = req.body;
  CertificationsManagement.findByIdAndUpdate(
    req.params.id,
    certificationsManagement
  )
    .then((certificationsManagement) => res.json(certificationsManagement))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  CertificationsManagement.deleteOne({ _id: req.params.id })
    .then((certificationsManagement) => res.json(certificationsManagement))
    .catch((err) => res.status(400).json("Error: " + err));
};
