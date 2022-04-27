const HazardsMonitoringDelete = require("../../models/generalDelete/hazardsMonitoring");

exports.findById = async (req, res) => {
  const hazardsMonitoringDelete = await HazardsMonitoringDelete.findOne().where({
    _id: req.params.id,
  });

  if (!hazardsMonitoringDelete) {
    res.status(500).json({ success: false });
  }
  res.send(hazardsMonitoringDelete);
};

exports.find = (req, res) => {
  HazardsMonitoringDelete.find()
    .then((hazardsMonitoringDelete) => res.json(hazardsMonitoringDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const hazardsMonitoringDelete = new HazardsMonitoringDelete(req.body);
  hazardsMonitoringDelete.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const hazardsMonitoringDelete = req.body;
  HazardsMonitoringDelete.findByIdAndUpdate(req.params.id, hazardsMonitoringDelete)
    .then((hazardsMonitoringDelete) => res.json(hazardsMonitoringDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  HazardsMonitoringDelete.deleteOne({ _id: req.params.id })
    .then((hazardsMonitoringDelete) => res.json(hazardsMonitoringDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};
