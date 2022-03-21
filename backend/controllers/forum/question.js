const Question = require("../../models/general/question");

exports.findById = async (req, res) => {
  const question =
    await Question.findOne().where({ _id: req.params.id });

  if (!question) {
    res.status(500).json({ success: false });
  }
  res.send(question);
};

exports.find = (req, res) => {
  Question.find()
    .then((question) => res.json(question))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const question = new Question(req.body);
  question.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const question = req.body;
  Question.findByIdAndUpdate(
    req.params.id,
    question
  )
    .then((question) => res.json(question))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  Question.deleteOne({ _id: req.params.id })
    .then((question) => res.json(question))
    .catch((err) => res.status(400).json("Error: " + err));
};
