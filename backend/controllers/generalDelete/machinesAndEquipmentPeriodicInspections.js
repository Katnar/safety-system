const MachinesAndEquipmentPeriodicInspectionsDelete = require("../../models/generalDelete/machinesAndEquipmentPeriodicInspections");

exports.findById = async (req, res) => {
  const machinesAndEquipmentPeriodicInspectionsDelete =
    await MachinesAndEquipmentPeriodicInspectionsDelete.findOne().where({
      _id: req.params.id,
    });

  if (!machinesAndEquipmentPeriodicInspectionsDelete) {
    res.status(500).json({ success: false });
  }
  res.send(machinesAndEquipmentPeriodicInspectionsDelete);
};

exports.find = (req, res) => {
  MachinesAndEquipmentPeriodicInspectionsDelete.find()
    .then((machinesAndEquipmentPeriodicInspectionsDelete) =>
      res.json(machinesAndEquipmentPeriodicInspectionsDelete)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const machinesAndEquipmentPeriodicInspectionsDelete =
    new MachinesAndEquipmentPeriodicInspectionsDelete(req.body);
  machinesAndEquipmentPeriodicInspectionsDelete.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const machinesAndEquipmentPeriodicInspectionsDelete = req.body;
  MachinesAndEquipmentPeriodicInspectionsDelete.findByIdAndUpdate(
    req.params.id,
    machinesAndEquipmentPeriodicInspectionsDelete
  )
    .then((machinesAndEquipmentPeriodicInspectionsDelete) =>
      res.json(machinesAndEquipmentPeriodicInspectionsDelete)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  MachinesAndEquipmentPeriodicInspectionsDelete.deleteOne({ _id: req.params.id })
    .then((machinesAndEquipmentPeriodicInspectionsDelete) =>
      res.json(machinesAndEquipmentPeriodicInspectionsDelete)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};
