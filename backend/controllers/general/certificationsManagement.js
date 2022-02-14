const CertificationsManagement = require("../../models/general/certificationsManagement");

exports.findById = async (req, res) => {
  const certificationsManagement =
    await CertificationsManagement.findOne().where({ _id: req.params.id });

  if (!certificationsManagement) {
    res.status(500).json({ success: false });
  }
  res.send(certificationsManagement);
};

exports.find = (req, res) => {
  CertificationsManagement.find()
    .then((certificationsManagement) => res.json(certificationsManagement))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const certificationsManagement = new CertificationsManagement(req.body);
  certificationsManagement.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const certificationsManagement = new CertificationsManagement(req.body);
  CertificationsManagement.findByIdAndUpdate(
    req.params.certificationsManagementId,
    certificationsManagement
  )
    .then((certificationsManagement) => res.json(certificationsManagement))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  CertificationsManagement.deleteOne({ _id: req.params.id })
    .then((certificationsManagement) => res.json(certificationsManagement))
    .catch((err) => res.status(400).json("Error: " + err));
};
