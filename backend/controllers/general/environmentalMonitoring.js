const EnvironmentalMonitoring = require("../../models/general/environmentalMonitoring");

exports.findById = async (req, res) => {
  const environmentalMonitoring = await EnvironmentalMonitoring.findOne().where(
    { _id: req.params.id }
  );

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
  const environmentalMonitoring = new EnvironmentalMonitoring(req.body);
  EnvironmentalMonitoring.updateOne(environmentalMonitoring)
    .then((environmentalMonitoring) => res.json(environmentalMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  EnvironmentalMonitoring.deleteOne({ _id: req.params.id })
    .then((environmentalMonitoring) => res.json(environmentalMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};
