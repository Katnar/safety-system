const UnitIdDelete = require("../../models/generalDelete/unitId");

exports.findById = async (req, res) => {
  const unitIdDelete = await UnitIdDelete.findOne().where({ _id: req.params.id });

  if (!unitIdDelete) {
    res.status(500).json({ success: false });
  }
  res.send(unitIdDelete);
};

exports.find = (req, res) => {
  UnitIdDelete.find()
    .then((unitIdDelete) => res.json(unitIdDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const unitIdDelete = new UnitIdDelete(req.body);
  unitIdDelete.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const unitIdDelete = req.body;
  UnitIdDelete.findByIdAndUpdate(req.params.unitIdDeleteId, unitIdDelete)
    .then((unitIdDelete) => res.json(unitIdDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  UnitIdDelete.deleteOne({ _id: req.params.id })
    .then((unitIdDelete) => res.json(unitIdDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};
