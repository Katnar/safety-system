const EnvironmentalMonitoringDelete = require("../../models/generalDelete/environmentalMonitoring");

exports.findById = async (req, res) => {
  const environmentalMonitoringDelete = await EnvironmentalMonitoringDelete.findOne().where(
    { _id: req.params.id }
  );

  if (!environmentalMonitoringDelete) {
    res.status(500).json({ success: false });
  }
  res.send(environmentalMonitoringDelete);
};

exports.findByGdod = async (req, res) => {
  const environmentalMonitoringDelete = await EnvironmentalMonitoringDelete.find().where({
    gdod: req.params.gdod,
  });

  if (!environmentalMonitoringDelete) {
    res.status(500).json({ success: false });
  }
  res.send(environmentalMonitoringDelete);
};

exports.findByHativa = async (req, res) => {
  const environmentalMonitoringDelete = await EnvironmentalMonitoringDelete.find().where({
    hativa: req.params.hativa,
  });

  if (!environmentalMonitoringDelete) {
    res.status(500).json({ success: false });
  }
  res.send(environmentalMonitoringDelete);
};

exports.findByOgda = async (req, res) => {
  const environmentalMonitoringDelete = await EnvironmentalMonitoringDelete.find().where({
    ogda: req.params.ogda,
  });

  if (!environmentalMonitoringDelete) {
    res.status(500).json({ success: false });
  }
  res.send(environmentalMonitoringDelete);
};

exports.findByPikod = async (req, res) => {
  const environmentalMonitoringDelete = await EnvironmentalMonitoringDelete.find().where({
    pikod: req.params.pikod,
  });

  if (!environmentalMonitoringDelete) {
    res.status(500).json({ success: false });
  }
  res.send(environmentalMonitoringDelete);
};

exports.find = (req, res) => {
  EnvironmentalMonitoringDelete.find()
    .then((environmentalMonitoringDelete) => res.json(environmentalMonitoringDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const environmentalMonitoringDelete = new EnvironmentalMonitoringDelete(req.body);
  environmentalMonitoringDelete.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const environmentalMonitoringDelete = req.body;
  EnvironmentalMonitoringDelete.findByIdAndUpdate(
    req.params.id,
    environmentalMonitoringDelete
  )
    .then((environmentalMonitoringDelete) => res.json(environmentalMonitoringDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  EnvironmentalMonitoringDelete.deleteOne({ _id: req.params.id })
    .then((environmentalMonitoringDelete) => res.json(environmentalMonitoringDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};
