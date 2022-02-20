const MachinesAndEquipmentPeriodicInspections = require("../../models/general/machinesAndEquipmentPeriodicInspections");

exports.findById = async (req, res) => {
  const machinesAndEquipmentPeriodicInspections =
    await MachinesAndEquipmentPeriodicInspections.findOne().where({
      _id: req.params.id,
    });

  if (!machinesAndEquipmentPeriodicInspections) {
    res.status(500).json({ success: false });
  }
  res.send(machinesAndEquipmentPeriodicInspections);
};

exports.find = (req, res) => {
  MachinesAndEquipmentPeriodicInspections.find()
    .then((machinesAndEquipmentPeriodicInspections) =>
      res.json(machinesAndEquipmentPeriodicInspections)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const machinesAndEquipmentPeriodicInspections =
    new MachinesAndEquipmentPeriodicInspections(req.body);
  machinesAndEquipmentPeriodicInspections.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const machinesAndEquipmentPeriodicInspections = req.body;
  MachinesAndEquipmentPeriodicInspections.findByIdAndUpdate(
    req.params.id,
    machinesAndEquipmentPeriodicInspections
  )
    .then((machinesAndEquipmentPeriodicInspections) =>
      res.json(machinesAndEquipmentPeriodicInspections)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  MachinesAndEquipmentPeriodicInspections.deleteOne({ _id: req.params.id })
    .then((machinesAndEquipmentPeriodicInspections) =>
      res.json(machinesAndEquipmentPeriodicInspections)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};
