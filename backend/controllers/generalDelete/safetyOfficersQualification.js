const SafetyOfficersQualificationDelete = require("../../models/generalDelete/safetyOfficersQualification");

exports.findById = async (req, res) => {
  const safetyOfficersQualificationDelete =
    await SafetyOfficersQualificationDelete.findOne().where({ _id: req.params.id });

  if (!safetyOfficersQualificationDelete) {
    res.status(500).json({ success: false });
  }
  res.send(safetyOfficersQualificationDelete);
};

exports.find = (req, res) => {
  SafetyOfficersQualificationDelete.find()
    .then((safetyOfficersQualificationDelete) =>
      res.json(safetyOfficersQualificationDelete)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const safetyOfficersQualificationDelete = new SafetyOfficersQualificationDelete(req.body);
  safetyOfficersQualificationDelete.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const safetyOfficersQualificationDelete = req.body;
  SafetyOfficersQualificationDelete.findByIdAndUpdate(req.params.id, safetyOfficersQualificationDelete)
    .then((safetyOfficersQualificationDelete) =>
      res.json(safetyOfficersQualificationDelete)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  SafetyOfficersQualificationDelete.deleteOne({ _id: req.params.id })
    .then((safetyOfficersQualificationDelete) =>
      res.json(safetyOfficersQualificationDelete)
    )
    .catch((err) => res.status(400).json("Error: " + err));
};
