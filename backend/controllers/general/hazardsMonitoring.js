const HazardsMonitoring = require("../../models/general/hazardsMonitoring");

exports.findById = async (req, res) => {
  const hazardsMonitoring = await HazardsMonitoring.findOne().where({
    _id: req.params.id,
  });

  if (!hazardsMonitoring) {
    res.status(500).json({ success: false });
  }
  res.send(hazardsMonitoring);
};

exports.find = (req, res) => {
  HazardsMonitoring.find()
    .then((hazardsMonitoring) => res.json(hazardsMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const hazardsMonitoring = new HazardsMonitoring(req.body);
  hazardsMonitoring.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const hazardsMonitoring = new HazardsMonitoring(req.body);
  HazardsMonitoring.updateOne(hazardsMonitoring)
    .then((hazardsMonitoring) => res.json(hazardsMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  HazardsMonitoring.deleteOne({ _id: req.params.id })
    .then((hazardsMonitoring) => res.json(hazardsMonitoring))
    .catch((err) => res.status(400).json("Error: " + err));
};
