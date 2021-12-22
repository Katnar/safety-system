const Candidatepreference = require("../../models/general/candidatepreference");
const mongoose = require('mongoose');

let readtipul = [
  {
    $lookup: {
      from: "candidates",
      localField: "candidate",
      foreignField: "_id",
      as: "candidate"
    }
  },
  {
    $unwind: "$candidate"
  },
  {
    $lookup: {
      from: "mahzors",
      localField: "mahzor",
      foreignField: "_id",
      as: "mahzor"
    }
  },
  {
    $unwind: "$mahzor"
  },
  {
    $lookup: {
      from: "jobs",
      localField: "certjobpreference1",
      foreignField: "_id",
      as: "certjobpreference1"
    }
  },
  {
    $unwind: "$certjobpreference1"
  },
  {
    $lookup: {
      from: "jobs",
      localField: "certjobpreference2",
      foreignField: "_id",
      as: "certjobpreference2"
    }
  },
  {
    $unwind: "$certjobpreference2"
  },
  {
    $lookup: {
      from: "jobs",
      localField: "certjobpreference3",
      foreignField: "_id",
      as: "certjobpreference3"
    }
  },
  {
    $unwind: "$certjobpreference3"
  },
  {
    $lookup: {
      from: "jobs",
      localField: "noncertjobpreference1",
      foreignField: "_id",
      as: "noncertjobpreference1"
    }
  },
  {
    $unwind: "$noncertjobpreference1"
  },
  {
    $lookup: {
      from: "jobs",
      localField: "noncertjobpreference2",
      foreignField: "_id",
      as: "noncertjobpreference2"
    }
  },
  {
    $unwind: "$noncertjobpreference2"
  },
  {
    $lookup: {
      from: "jobs",
      localField: "noncertjobpreference3",
      foreignField: "_id",
      as: "noncertjobpreference3"
    }
  },
  {
    $unwind: "$noncertjobpreference3"
  },
];

exports.findById = async(req, res) => {
  const candidatepreference = await Candidatepreference.findOne().where({_id:req.params.id})
  
  if(!candidatepreference){
      res.status(500).json({success: false})
  }
  res.send(candidatepreference)
  
 }

exports.find = (req, res) => {
    Candidatepreference.find()
    .then((candidatepreference) => res.json(candidatepreference))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const candidatepreference = new Candidatepreference(req.body);
  candidatepreference.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const candidatepreference = new Candidatepreference(req.body);
  Candidatepreference.updateOne(candidatepreference)
    .then((candidatepreference) => res.json(candidatepreference))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
    Candidatepreference.deleteOne({ _id: req.params.id })
    .then((candidatepreference) => res.json(candidatepreference))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.candidatepreferencebycandidateid = async (req, res) => {
  let tipulfindquerry = readtipul.slice();
  let finalquerry = tipulfindquerry;

  let andquery = [];

  //candidateid
  if (req.params.candidateid != 'undefined') {
    andquery.push({ "candidate._id": mongoose.Types.ObjectId(req.params.candidateid) });
  }

  if (andquery.length != 0) {
    let matchquerry = {
      "$match": {
        "$and": andquery
      }
    };
    finalquerry.push(matchquerry)
  }

  // console.log(matchquerry)
  //console.log(andquery)

  Candidatepreference.aggregate(finalquerry)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
}