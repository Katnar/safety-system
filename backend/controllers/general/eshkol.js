const Eshkol = require("../../models/general/eshkol");
const mongoose = require('mongoose');

let readtipul = [
  {
    $lookup: {
      from: "candidates",
      localField: "candidates",
      foreignField: "_id",
      as: "candidates"
    }
  },
  {
    $lookup: {
      from: "users",
      localField: "candidates.user",
      foreignField: "_id",
      as: "candidates.user"
    }
  },
  // {
  //   $unwind: "$users"
  // },
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
      localField: "job",
      foreignField: "_id",
      as: "job"
    }
  },
  {
    $unwind: "$job"
  },
  {
    $lookup: {
      from: "jobtypes",
      localField: "job.jobtype",
      foreignField: "_id",
      as: "job.jobtype"
    }
  },
  {
    $unwind: "$job.jobtype"
  },
  {
    $lookup: {
      from: "units",
      localField: "job.unit",
      foreignField: "_id",
      as: "job.unit"
    }
  },
  {
    $unwind: "$job.unit"
  },
];

exports.findById = async(req, res) => {
  const eshkol = await Eshkol.findOne().where({_id:req.params.id})
  
  if(!eshkol){
      res.status(500).json({success: false})
  }
  res.send(eshkol)
  
 }

exports.find = (req, res) => {
    Eshkol.find()
    .then((eshkol) => res.json(eshkol))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const eshkol = new Eshkol(req.body);
  eshkol.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const eshkol = new Eshkol(req.body);
  Eshkol.updateOne(eshkol)
    .then((eshkol) => res.json(eshkol))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
    Eshkol.deleteOne({ _id: req.params.id })
    .then((eshkol) => res.json(eshkol))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.deleteMahzorEshkol = (req, res) => {
  Eshkol.deleteMany({ mahzor: req.params.mahzorid })
  .then((eshkol) => res.json(eshkol))
  .catch((err) => res.status(400).json("Error: " + err));
};

exports.eshkolbymahzorid = (req, res) => {
  let tipulfindquerry = readtipul.slice();
  let finalquerry = tipulfindquerry;

  let andquery = [];

  //mahzorid
  if (req.params.mahzorid != 'undefined') {
    andquery.push({ "mahzor._id": mongoose.Types.ObjectId(req.params.mahzorid) });
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

  Eshkol.aggregate(finalquerry)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(400).json('Error: ' + error);
    });
};