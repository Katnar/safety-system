const SafetyOfficersQualification = require("../../models/general/safetyOfficersQualification");

exports.findById = async (req, res) => {
  const safetyOfficersQualification =
    await SafetyOfficersQualification.findOne().where({ _id: req.params.id });

  if (!safetyOfficersQualification) {
    res.status(500).json({ success: false });
  }
  res.send(safetyOfficersQualification);
};

exports.find = (req, res) => {
  SafetyOfficersQualification.find()
    .then((safetyOfficersQualification) =>
      res.json(safetyOfficersQualification)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const safetyOfficersQualification = new SafetyOfficersQualification(req.body);
  safetyOfficersQualification.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const safetyOfficersQualification = new SafetyOfficersQualification(req.body);
  SafetyOfficersQualification.updateOne(safetyOfficersQualification)
    .then((safetyOfficersQualification) =>
      res.json(safetyOfficersQualification)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  SafetyOfficersQualification.deleteOne({ _id: req.params.id })
    .then((safetyOfficersQualification) =>
      res.json(safetyOfficersQualification)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};
