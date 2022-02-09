const ReviewsDocumentation = require("../../models/general/reviewsDocumentation");

exports.findById = async (req, res) => {
  const reviewsDocumentation = await ReviewsDocumentation.findOne().where({
    _id: req.params.id,
  });

  if (!reviewsDocumentation) {
    res.status(500).json({ success: false });
  }
  res.send(reviewsDocumentation);
};

exports.find = (req, res) => {
  ReviewsDocumentation.find()
    .then((reviewsDocumentation) => res.json(reviewsDocumentation))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const reviewsDocumentation = new ReviewsDocumentation(req.body);
  reviewsDocumentation.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const reviewsDocumentation = new ReviewsDocumentation(req.body);
  ReviewsDocumentation.updateOne(reviewsDocumentation)
    .then((reviewsDocumentation) => res.json(reviewsDocumentation))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  ReviewsDocumentation.deleteOne({ _id: req.params.id })
    .then((reviewsDocumentation) => res.json(reviewsDocumentation))
    .catch((err) => res.status(400).json("Error: " + err));
};
