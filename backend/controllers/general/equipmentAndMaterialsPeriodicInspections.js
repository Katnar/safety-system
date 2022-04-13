const EquipmentAndMaterialsPeriodicInspections = require("../../models/general/equipmentAndMaterialsPeriodicInspections");

exports.findById = async (req, res) => {
  const equipmentAndMaterialsPeriodicInspections =
    await EquipmentAndMaterialsPeriodicInspections.findOne().where({
      _id: req.params.id,
    });

  if (!equipmentAndMaterialsPeriodicInspections) {
    res.status(500).json({ success: false });
  }
  res.send(equipmentAndMaterialsPeriodicInspections);
};

exports.findByGdod = async (req, res) => {
  const equipmentAndMaterialsPeriodicInspections = await EquipmentAndMaterialsPeriodicInspections.find().where({
    gdod: req.params.gdod,
  });

  if (!equipmentAndMaterialsPeriodicInspections) {
    res.status(500).json({ success: false });
  }
  res.send(equipmentAndMaterialsPeriodicInspections);
};

exports.findByHativa = async (req, res) => {
  const equipmentAndMaterialsPeriodicInspections = await EquipmentAndMaterialsPeriodicInspections.find().where({
    hativa: req.params.hativa,
  });

  if (!equipmentAndMaterialsPeriodicInspections) {
    res.status(500).json({ success: false });
  }
  res.send(equipmentAndMaterialsPeriodicInspections);
};

exports.findByOgda = async (req, res) => {
  const equipmentAndMaterialsPeriodicInspections = await EquipmentAndMaterialsPeriodicInspections.find().where({
    ogda: req.params.ogda,
  });

  if (!equipmentAndMaterialsPeriodicInspections) {
    res.status(500).json({ success: false });
  }
  res.send(equipmentAndMaterialsPeriodicInspections);
};

exports.findByPikod = async (req, res) => {
  const equipmentAndMaterialsPeriodicInspections = await EquipmentAndMaterialsPeriodicInspections.find().where({
    pikod: req.params.pikod,
  });

  if (!equipmentAndMaterialsPeriodicInspections) {
    res.status(500).json({ success: false });
  }
  res.send(equipmentAndMaterialsPeriodicInspections);
};

exports.find = (req, res) => {
  EquipmentAndMaterialsPeriodicInspections.find()
    .then((equipmentAndMaterialsPeriodicInspections) =>
      res.json(equipmentAndMaterialsPeriodicInspections)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const equipmentAndMaterialsPeriodicInspections =
    new EquipmentAndMaterialsPeriodicInspections(req.body);
  equipmentAndMaterialsPeriodicInspections.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const equipmentAndMaterialsPeriodicInspections = req.body;
  EquipmentAndMaterialsPeriodicInspections.findByIdAndUpdate(
    req.params.id,
    equipmentAndMaterialsPeriodicInspections
  )
    .then((equipmentAndMaterialsPeriodicInspections) =>
      res.json(equipmentAndMaterialsPeriodicInspections)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  EquipmentAndMaterialsPeriodicInspections.deleteOne({ _id: req.params.id })
    .then((equipmentAndMaterialsPeriodicInspections) =>
      res.json(equipmentAndMaterialsPeriodicInspections)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};
