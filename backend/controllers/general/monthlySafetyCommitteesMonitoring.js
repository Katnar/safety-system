const MonthlySafetyCommitteesMonitoring = require("../../models/general/monthlySafetyCommitteesMonitoring");

exports.findById = async (req, res) => {
  const monthlySafetyCommitteesMonitoring =
    await MonthlySafetyCommitteesMonitoring.findOne().where({
      _id: req.params.id,
    });

  if (!monthlySafetyCommitteesMonitoring) {
    res.status(500).json({ success: false });
  }
  res.send(monthlySafetyCommitteesMonitoring);
};

exports.find = (req, res) => {
  MonthlySafetyCommitteesMonitoring.find()
    .then((monthlySafetyCommitteesMonitoring) =>
      res.json(monthlySafetyCommitteesMonitoring)
    )
    .catch((err) => res.status(400).json("Error: " + err));
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
