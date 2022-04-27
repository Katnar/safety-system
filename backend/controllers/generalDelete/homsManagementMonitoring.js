const HomsManagementMonitoringDelete = require("../../models/generalDelete/homsManagementMonitoring");

exports.findById = async (req, res) => {
  const homsManagementMonitoringDelete =
    await HomsManagementMonitoringDelete.findOne().where({ _id: req.params.id });

  if (!homsManagementMonitoringDelete) {
    res.status(500).json({ success: false });
  }
  res.send(homsManagementMonitoringDelete);
};

exports.find = (req, res) => {
  HomsManagementMonitoringDelete.find()
    .then((homsManagementMonitoringDelete) => res.json(homsManagementMonitoringDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const homsManagementMonitoringDelete = new HomsManagementMonitoringDelete(req.body);
  homsManagementMonitoringDelete.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const homsManagementMonitoringDelete = req.body;
  HomsManagementMonitoringDelete.findByIdAndUpdate(
    req.params.id,
    homsManagementMonitoringDelete
  )
    .then((homsManagementMonitoringDelete) => res.json(homsManagementMonitoringDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  HomsManagementMonitoringDelete.deleteOne({ _id: req.params.id })
    .then((homsManagementMonitoringDelete) => res.json(homsManagementMonitoringDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};
