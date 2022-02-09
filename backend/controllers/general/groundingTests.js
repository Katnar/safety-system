const GroundingTests = require("../../models/general/groundingTests");

exports.findById = async (req, res) => {
  const groundingTests = await GroundingTests.findOne().where({
    _id: req.params.id,
  });

  if (!groundingTests) {
    res.status(500).json({ success: false });
  }
  res.send(groundingTests);
};

exports.find = (req, res) => {
  GroundingTests.find()
    .then((groundingTests) => res.json(groundingTests))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const groundingTests = new GroundingTests(req.body);
  groundingTests.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const groundingTests = new GroundingTests(req.body);
  GroundingTests.updateOne(groundingTests)
    .then((groundingTests) => res.json(groundingTests))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  GroundingTests.deleteOne({ _id: req.params.id })
    .then((groundingTests) => res.json(groundingTests))
    .catch((err) => res.status(400).json("Error: " + err));
};
