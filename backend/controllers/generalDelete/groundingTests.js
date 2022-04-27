const GroundingTestsDelete = require("../../models/generalDelete/groundingTests");

exports.findById = async (req, res) => {
  const groundingTestsDelete = await GroundingTestsDelete.findOne().where({
    _id: req.params.id,
  });

  if (!groundingTestsDelete) {
    res.status(500).json({ success: false });
  }
  res.send(groundingTestsDelete);
};

exports.find = (req, res) => {
  GroundingTestsDelete.find()
    .then((groundingTestsDelete) => res.json(groundingTestsDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const groundingTestsDelete = new GroundingTestsDelete(req.body);
  groundingTestsDelete.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const groundingTestsDelete = req.body;
  GroundingTestsDelete.findByIdAndUpdate(req.params.id, groundingTestsDelete)
    .then((groundingTestsDelete) => res.json(groundingTestsDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  GroundingTestsDelete.deleteOne({ _id: req.params.id })
    .then((groundingTestsDelete) => res.json(groundingTestsDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};
