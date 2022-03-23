const Answer = require("../../models/forum/answer");

exports.findById = async (req, res) => {
  const answer =
    await Answer.findOne().where({ _id: req.params.id });

  if (!answer) {
    res.status(500).json({ success: false });
  }
  res.send(answer);
};

exports.find = (req, res) => {
  Answer.find()
    .then((answer) => res.json(answer))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const answer = new Answer(req.body);
  answer.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const answer = req.body;
  Answer.findByIdAndUpdate(
    req.params.id,
    answer
  )
    .then((answer) => res.json(answer))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  Answer.deleteOne({ _id: req.params.id })
    .then((answer) => res.json(answer))
    .catch((err) => res.status(400).json("Error: " + err));
};
