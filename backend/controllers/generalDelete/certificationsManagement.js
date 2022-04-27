const CertificationsManagementDelete = require("../../models/generalDelete/certificationsManagement");

exports.findById = async (req, res) => {
  const certificationsManagementDelete =
    await CertificationsManagementDelete.findOne().where({ _id: req.params.id });

  if (!certificationsManagementDelete) {
    res.status(500).json({ success: false });
  }
  res.send(certificationsManagementDelete);
};

exports.findByGdod = async (req, res) => {
  const certificationsManagementDelete = await CertificationsManagementDelete.find().where({
    gdod: req.params.gdod,
  });

  if (!certificationsManagementDelete) {
    res.status(500).json({ success: false });
  }
  res.send(certificationsManagementDelete);
};

exports.findByHativa = async (req, res) => {
  const certificationsManagementDelete = await CertificationsManagementDelete.find().where({
    hativa: req.params.hativa,
  });

  if (!certificationsManagementDelete) {
    res.status(500).json({ success: false });
  }
  res.send(certificationsManagementDelete);
};

exports.findByOgda = async (req, res) => {
  const certificationsManagementDelete = await CertificationsManagementDelete.find().where({
    ogda: req.params.ogda,
  });

  if (!certificationsManagementDelete) {
    res.status(500).json({ success: false });
  }
  res.send(certificationsManagementDelete);
};

exports.findByPikod = async (req, res) => {
  const certificationsManagementDelete = await CertificationsManagementDelete.find().where({
    pikod: req.params.pikod,
  });

  if (!certificationsManagementDelete) {
    res.status(500).json({ success: false });
  }
  res.send(certificationsManagementDelete);
};

exports.find = (req, res) => {
  CertificationsManagementDelete.find()
    .then((certificationsManagementDelete) => res.json(certificationsManagementDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const certificationsManagementDelete = new CertificationsManagementDelete(req.body);
  certificationsManagementDelete.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const certificationsManagementDelete = req.body;
  CertificationsManagementDelete.findByIdAndUpdate(
    req.params.id,
    certificationsManagementDelete
  )
    .then((certificationsManagementDelete) => res.json(certificationsManagementDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  CertificationsManagementDelete.deleteOne({ _id: req.params.id })
    .then((certificationsManagementDelete) => res.json(certificationsManagementDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};
