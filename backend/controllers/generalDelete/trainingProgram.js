const TrainingProgramDelete = require("../../models/generalDelete/trainingProgram");

exports.findById = async (req, res) => {
  const trainingProgramDelete = await TrainingProgramDelete.findOne().where({
    _id: req.params.id,
  });

  if (!trainingProgramDelete) {
    res.status(500).json({ success: false });
  }
  res.send(trainingProgramDelete);
};

exports.find = (req, res) => {
  TrainingProgramDelete.find()
    .then((trainingProgramDelete) => res.json(trainingProgramDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const trainingProgramDelete = new TrainingProgramDelete(req.body);
  trainingProgramDelete.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const trainingProgramDelete = req.body;
  TrainingProgramDelete.findByIdAndUpdate(req.params.id, trainingProgramDelete)
    .then((trainingProgramDelete) => res.json(trainingProgramDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  TrainingProgramDelete.deleteOne({ _id: req.params.id })
    .then((trainingProgramDelete) => res.json(trainingProgramDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};
