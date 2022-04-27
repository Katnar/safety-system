const ReviewsDocumentationDelete = require("../../models/generalDelete/reviewsDocumentation");

exports.findById = async (req, res) => {
  const reviewsDocumentationDelete = await ReviewsDocumentationDelete.findOne().where({
    _id: req.params.id,
  });

  if (!reviewsDocumentationDelete) {
    res.status(500).json({ success: false });
  }
  res.send(reviewsDocumentationDelete);
};

exports.find = (req, res) => {
  ReviewsDocumentationDelete.find()
    .then((reviewsDocumentationDelete) => res.json(reviewsDocumentationDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const reviewsDocumentationDelete = new ReviewsDocumentationDelete(req.body);
  reviewsDocumentationDelete.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const reviewsDocumentationDelete = req.body;
  ReviewsDocumentationDelete.findByIdAndUpdate(req.params.id, reviewsDocumentationDelete)
    .then((reviewsDocumentationDelete) => res.json(reviewsDocumentationDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  ReviewsDocumentationDelete.deleteOne({ _id: req.params.id })
    .then((reviewsDocumentationDelete) => res.json(reviewsDocumentationDelete))
    .catch((err) => res.status(400).json("Error: " + err));
};
