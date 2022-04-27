const RiskManagementMonitoringDelete = require("../../models/generalDelete/riskManagementMonitoring");

exports.findById = async (req, res) => {
  const riskManagementMonitoringDelete =
    await RiskManagementMonitoringDelete.findOne().where({ _id: req.params.id });

  if (!riskManagementMonitoringDelete) {
    res.status(500).json({ success: false });
  }
  res.send(riskManagementMonitoringDelete);
};

exports.find = (req, res) => {
  RiskManagementMonitoringDelete.find()
    .then((riskManagementMonitoringDelete) => res.json(riskManagementMonitoringDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const riskManagementMonitoringDelete = new RiskManagementMonitoringDelete(req.body);
  riskManagementMonitoringDelete.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const riskManagementMonitoringDelete = req.body;
  RiskManagementMonitoringDelete.findByIdAndUpdate(
    req.params.id,
    riskManagementMonitoringDelete
  )
    .then((riskManagementMonitoringDelete) => res.json(riskManagementMonitoringDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  RiskManagementMonitoringDelete.deleteOne({ _id: req.params.id })
    .then((riskManagementMonitoringDelete) => res.json(riskManagementMonitoringDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};
