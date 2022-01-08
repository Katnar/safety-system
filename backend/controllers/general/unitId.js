const UnitId = require("../../models/general/unitId");

exports.findById = async (req, res) => {
  const unitId = await UnitId.findOne().where({ _id: req.params.id });

  if (!unitId) {
    res.status(500).json({ success: false });
  }
  res.send(unitId);
};

exports.find = (req, res) => {
  UnitId.find()
    .then((unitId) => res.json(unitId))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const unitId = new UnitId(req.body);
  unitId.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const unitId = new UnitId(req.body);
  UnitId.updateOne(unitId)
    .then((unitId) => res.json(unitId))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  UnitId.deleteOne({ _id: req.params.id })
    .then((unitId) => res.json(unitId))
    .catch((err) => res.status(400).json("Error: " + err));
};
