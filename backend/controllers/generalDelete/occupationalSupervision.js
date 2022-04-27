const OccupationalSupervisionDelete = require("../../models/generalDelete/occupationalSupervision");

exports.findById = async (req, res) => {
  const occupationalSupervisionDelete = await OccupationalSupervisionDelete.findOne().where(
    { _id: req.params.id }
  );

  if (!occupationalSupervisionDelete) {
    res.status(500).json({ success: false });
  }
  res.send(occupationalSupervisionDelete);
};

exports.findByGdod = async (req, res) => {
  const occupationalSupervisionDelete = await OccupationalSupervisionDelete.find().where({
    gdod: req.params.gdod,
  });

  if (!occupationalSupervisionDelete) {
    res.status(500).json({ success: false });
  }
  res.send(occupationalSupervisionDelete);
};

exports.findByHativa = async (req, res) => {
  const occupationalSupervisionDelete = await OccupationalSupervisionDelete.find().where({
    hativa: req.params.hativa,
  });

  if (!occupationalSupervisionDelete) {
    res.status(500).json({ success: false });
  }
  res.send(occupationalSupervisionDelete);
};

exports.findByOgda = async (req, res) => {
  const occupationalSupervisionDelete = await OccupationalSupervisionDelete.find().where({
    ogda: req.params.ogda,
  });

  if (!occupationalSupervisionDelete) {
    res.status(500).json({ success: false });
  }
  res.send(occupationalSupervisionDelete);
};

exports.findByPikod = async (req, res) => {
  const occupationalSupervisionDelete = await OccupationalSupervisionDelete.find().where({
    pikod: req.params.pikod,
  });

  if (!occupationalSupervisionDelete) {
    res.status(500).json({ success: false });
  }
  res.send(occupationalSupervisionDelete);
};

exports.find = (req, res) => {
  OccupationalSupervisionDelete.find()
    .then((occupationalSupervisionDelete) => res.json(occupationalSupervisionDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const occupationalSupervisionDelete = new OccupationalSupervisionDelete(req.body);
  occupationalSupervisionDelete.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const occupationalSupervisionDelete = req.body;
  OccupationalSupervisionDelete.findByIdAndUpdate(
    req.params.id,
    occupationalSupervisionDelete
  )
    .then((occupationalSupervisionDelete) => res.json(occupationalSupervisionDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  OccupationalSupervisionDelete.deleteOne({ _id: req.params.id })
    .then((occupationalSupervisionDelete) => res.json(occupationalSupervisionDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};
