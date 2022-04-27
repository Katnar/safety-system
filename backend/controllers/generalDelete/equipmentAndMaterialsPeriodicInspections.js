const EquipmentAndMaterialsPeriodicInspectionsDelete = require("../../models/generalDelete/equipmentAndMaterialsPeriodicInspections");

exports.findById = async (req, res) => {
  const equipmentAndMaterialsPeriodicInspectionsDelete =
    await EquipmentAndMaterialsPeriodicInspectionsDelete.findOne().where({
      _id: req.params.id,
    });

  if (!equipmentAndMaterialsPeriodicInspectionsDelete) {
    res.status(500).json({ success: false });
  }
  res.send(equipmentAndMaterialsPeriodicInspectionsDelete);
};

exports.findByGdod = async (req, res) => {
  const equipmentAndMaterialsPeriodicInspectionsDelete = await EquipmentAndMaterialsPeriodicInspectionsDelete.find().where({
    gdod: req.params.gdod,
  });

  if (!equipmentAndMaterialsPeriodicInspectionsDelete) {
    res.status(500).json({ success: false });
  }
  res.send(equipmentAndMaterialsPeriodicInspectionsDelete);
};

exports.findByHativa = async (req, res) => {
  const equipmentAndMaterialsPeriodicInspectionsDelete = await EquipmentAndMaterialsPeriodicInspectionsDelete.find().where({
    hativa: req.params.hativa,
  });

  if (!equipmentAndMaterialsPeriodicInspectionsDelete) {
    res.status(500).json({ success: false });
  }
  res.send(equipmentAndMaterialsPeriodicInspectionsDelete);
};

exports.findByOgda = async (req, res) => {
  const equipmentAndMaterialsPeriodicInspectionsDelete = await EquipmentAndMaterialsPeriodicInspectionsDelete.find().where({
    ogda: req.params.ogda,
  });

  if (!equipmentAndMaterialsPeriodicInspectionsDelete) {
    res.status(500).json({ success: false });
  }
  res.send(equipmentAndMaterialsPeriodicInspectionsDelete);
};

exports.findByPikod = async (req, res) => {
  const equipmentAndMaterialsPeriodicInspectionsDelete = await EquipmentAndMaterialsPeriodicInspectionsDelete.find().where({
    pikod: req.params.pikod,
  });

  if (!equipmentAndMaterialsPeriodicInspectionsDelete) {
    res.status(500).json({ success: false });
  }
  res.send(equipmentAndMaterialsPeriodicInspectionsDelete);
};

exports.find = (req, res) => {
  EquipmentAndMaterialsPeriodicInspectionsDelete.find()
    .then((equipmentAndMaterialsPeriodicInspectionsDelete) =>
      res.json(equipmentAndMaterialsPeriodicInspectionsDelete)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const equipmentAndMaterialsPeriodicInspectionsDelete =
    new EquipmentAndMaterialsPeriodicInspectionsDelete(req.body);
  equipmentAndMaterialsPeriodicInspectionsDelete.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const equipmentAndMaterialsPeriodicInspectionsDelete = req.body;
  EquipmentAndMaterialsPeriodicInspectionsDelete.findByIdAndUpdate(
    req.params.id,
    equipmentAndMaterialsPeriodicInspectionsDelete
  )
    .then((equipmentAndMaterialsPeriodicInspectionsDelete) =>
      res.json(equipmentAndMaterialsPeriodicInspectionsDelete)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  EquipmentAndMaterialsPeriodicInspectionsDelete.deleteOne({ _id: req.params.id })
    .then((equipmentAndMaterialsPeriodicInspectionsDelete) =>
      res.json(equipmentAndMaterialsPeriodicInspectionsDelete)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};
