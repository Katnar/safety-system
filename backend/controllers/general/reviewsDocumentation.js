const ReviewsDocumentation = require("../../models/general/reviewsDocumentation");
const { readtipul } = require("../../helpers/aggregatehelper");
const mongoose = require('mongoose');

exports.findById = async (req, res) => {
  let tipulfindquerry = readtipul.slice();
  let finalquerry = tipulfindquerry;

  let andquery = [];
  let matchquerry;

  andquery.push({ "_id": mongoose.Types.ObjectId(req.params.id) });

  if (andquery.length != 0) {
    matchquerry = {
      "$match": {
        "$and": andquery
      }
    };
    finalquerry.push(matchquerry)
  }

  // console.log(matchquerry)
  // console.log(andquery)

  ReviewsDocumentation.aggregate(finalquerry)
    .then((result) => {
      res.json(result[0]);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
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
  const reviewsDocumentation = req.body;
  ReviewsDocumentation.findByIdAndUpdate(req.params.id, reviewsDocumentation)
    .then((reviewsDocumentation) => res.json(reviewsDocumentation))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  ReviewsDocumentation.deleteOne({ _id: req.params.id })
    .then((reviewsDocumentation) => res.json(reviewsDocumentation))
    .catch((err) => res.status(400).json("Error: " + err));
};
