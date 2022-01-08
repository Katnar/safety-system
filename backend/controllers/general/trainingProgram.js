const TrainingProgram = require("../../models/general/trainingProgram");

exports.findById = async (req, res) => {
  const trainingProgram = await TrainingProgram.findOne().where({
    _id: req.params.id,
  });

  if (!trainingProgram) {
    res.status(500).json({ success: false });
  }
  res.send(trainingProgram);
};

exports.find = (req, res) => {
  TrainingProgram.find()
    .then((trainingProgram) => res.json(trainingProgram))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const trainingProgram = new TrainingProgram(req.body);
  trainingProgram.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const trainingProgram = new TrainingProgram(req.body);
  TrainingProgram.updateOne(trainingProgram)
    .then((trainingProgram) => res.json(trainingProgram))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  TrainingProgram.deleteOne({ _id: req.params.id })
    .then((trainingProgram) => res.json(trainingProgram))
    .catch((err) => res.status(400).json("Error: " + err));
};
