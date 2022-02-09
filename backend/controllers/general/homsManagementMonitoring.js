const HomsManagementMonitoring = require("../../models/general/homsManagementMonitoring");

exports.findById = async (req, res) => {
  const homsManagementMonitoring =
    await HomsManagementMonitoring.findOne().where({ _id: req.params.id });

  if (!homsManagementMonitoring) {
    res.status(500).json({ success: false });
  }
  res.send(homsManagementMonitoring);
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
  const homsManagementMonitoring = new HomsManagementMonitoring(req.body);
  HomsManagementMonitoring.updateOne(homsManagementMonitoring)
    .then((homsManagementMonitoring) => res.json(homsManagementMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  HomsManagementMonitoring.deleteOne({ _id: req.params.id })
    .then((homsManagementMonitoring) => res.json(homsManagementMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};
