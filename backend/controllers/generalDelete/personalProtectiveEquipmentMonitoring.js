const PersonalProtectiveEquipmentMonitoringDelete = require("../../models/generalDelete/personalProtectiveEquipmentMonitoring");

exports.findById = async (req, res) => {
  const personalProtectiveEquipmentMonitoringDelete =
    await PersonalProtectiveEquipmentMonitoringDelete.findOne().where({
      _id: req.params.id,
    });

  if (!personalProtectiveEquipmentMonitoringDelete) {
    res.status(500).json({ success: false });
  }
  res.send(personalProtectiveEquipmentMonitoringDelete);
};

exports.find = (req, res) => {
  PersonalProtectiveEquipmentMonitoringDelete.find()
    .then((personalProtectiveEquipmentMonitoringDelete) =>
      res.json(personalProtectiveEquipmentMonitoringDelete)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const personalProtectiveEquipmentMonitoringDelete =
    new PersonalProtectiveEquipmentMonitoringDelete(req.body);
  personalProtectiveEquipmentMonitoringDelete.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const personalProtectiveEquipmentMonitoringDelete = req.body;
  PersonalProtectiveEquipmentMonitoringDelete.findByIdAndUpdate(
    req.params.id,
    personalProtectiveEquipmentMonitoringDelete
  )
    .then((personalProtectiveEquipmentMonitoringDelete) =>
      res.json(personalProtectiveEquipmentMonitoringDelete)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  PersonalProtectiveEquipmentMonitoringDelete.deleteOne({ _id: req.params.id })
    .then((personalProtectiveEquipmentMonitoringDelete) =>
      res.json(personalProtectiveEquipmentMonitoringDelete)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};
