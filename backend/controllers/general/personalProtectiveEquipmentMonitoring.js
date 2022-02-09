const PersonalProtectiveEquipmentMonitoring = require("../../models/general/personalProtectiveEquipmentMonitoring");

exports.findById = async (req, res) => {
  const personalProtectiveEquipmentMonitoring =
    await PersonalProtectiveEquipmentMonitoring.findOne().where({
      _id: req.params.id,
    });

  if (!personalProtectiveEquipmentMonitoring) {
    res.status(500).json({ success: false });
  }
  res.send(personalProtectiveEquipmentMonitoring);
};

exports.find = (req, res) => {
  PersonalProtectiveEquipmentMonitoring.find()
    .then((personalProtectiveEquipmentMonitoring) =>
      res.json(personalProtectiveEquipmentMonitoring)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const personalProtectiveEquipmentMonitoring =
    new PersonalProtectiveEquipmentMonitoring(req.body);
  personalProtectiveEquipmentMonitoring.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const personalProtectiveEquipmentMonitoring =
    new PersonalProtectiveEquipmentMonitoring(req.body);
  PersonalProtectiveEquipmentMonitoring.updateOne(
    personalProtectiveEquipmentMonitoring
  )
    .then((personalProtectiveEquipmentMonitoring) =>
      res.json(personalProtectiveEquipmentMonitoring)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  PersonalProtectiveEquipmentMonitoring.deleteOne({ _id: req.params.id })
    .then((personalProtectiveEquipmentMonitoring) =>
      res.json(personalProtectiveEquipmentMonitoring)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};
