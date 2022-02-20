const RiskManagementMonitoring = require("../../models/general/riskManagementMonitoring");

exports.findById = async (req, res) => {
  const riskManagementMonitoring =
    await RiskManagementMonitoring.findOne().where({ _id: req.params.id });

  if (!riskManagementMonitoring) {
    res.status(500).json({ success: false });
  }
  res.send(riskManagementMonitoring);
};

exports.find = (req, res) => {
  RiskManagementMonitoring.find()
    .then((riskManagementMonitoring) => res.json(riskManagementMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const riskManagementMonitoring = new RiskManagementMonitoring(req.body);
  riskManagementMonitoring.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const riskManagementMonitoring = req.body;
  RiskManagementMonitoring.findByIdAndUpdate(
    req.params.id,
    riskManagementMonitoring
  )
    .then((riskManagementMonitoring) => res.json(riskManagementMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  RiskManagementMonitoring.deleteOne({ _id: req.params.id })
    .then((riskManagementMonitoring) => res.json(riskManagementMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};
