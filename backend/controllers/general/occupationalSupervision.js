const OccupationalSupervision = require("../../models/general/occupationalSupervision");

exports.findById = async (req, res) => {
  const occupationalSupervision = await OccupationalSupervision.findOne().where(
    { _id: req.params.id }
  );

  if (!occupationalSupervision) {
    res.status(500).json({ success: false });
  }
  res.send(occupationalSupervision);
};

exports.find = (req, res) => {
  OccupationalSupervision.find()
    .then((occupationalSupervision) => res.json(occupationalSupervision))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const occupationalSupervision = new OccupationalSupervision(req.body);
  occupationalSupervision.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const occupationalSupervision = req.body;
  OccupationalSupervision.findByIdAndUpdate(
    req.params.id,
    occupationalSupervision
  )
    .then((occupationalSupervision) => res.json(occupationalSupervision))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  OccupationalSupervision.deleteOne({ _id: req.params.id })
    .then((occupationalSupervision) => res.json(occupationalSupervision))
    .catch((err) => res.status(400).json("Error: " + err));
};
