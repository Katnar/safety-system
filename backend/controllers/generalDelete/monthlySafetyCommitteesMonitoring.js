const MonthlySafetyCommitteesMonitoringDelete = require("../../models/generalDelete/monthlySafetyCommitteesMonitoring");

exports.findById = async (req, res) => {
  const monthlySafetyCommitteesMonitoringDelete =
    await MonthlySafetyCommitteesMonitoringDelete.findOne().where({
      _id: req.params.id,
    });

  if (!monthlySafetyCommitteesMonitoringDelete) {
    res.status(500).json({ success: false });
  }
  res.send(monthlySafetyCommitteesMonitoringDelete);
};

exports.find = (req, res) => {
  MonthlySafetyCommitteesMonitoringDelete.find()
    .then((monthlySafetyCommitteesMonitoringDelete) =>
      res.json(monthlySafetyCommitteesMonitoringDelete)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const monthlySafetyCommitteesMonitoringDelete =
    new MonthlySafetyCommitteesMonitoringDelete(req.body);
  monthlySafetyCommitteesMonitoringDelete.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const monthlySafetyCommitteesMonitoringDelete = req.body;
  MonthlySafetyCommitteesMonitoringDelete.findByIdAndUpdate(
    req.params.id,
    monthlySafetyCommitteesMonitoringDelete
  )
    .then((monthlySafetyCommitteesMonitoringDelete) =>
      res.json(monthlySafetyCommitteesMonitoringDelete)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  MonthlySafetyCommitteesMonitoringDelete.deleteOne({ _id: req.params.id })
    .then((monthlySafetyCommitteesMonitoringDelete) =>
      res.json(monthlySafetyCommitteesMonitoringDelete)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};
