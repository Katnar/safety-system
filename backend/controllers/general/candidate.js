const Candidate = require("../../models/general/candidate");

exports.findById = async(req, res) => {
  const candidate = await Candidate.findOne().where({_id:req.params.id})
  
  if(!candidate){
      res.status(500).json({success: false})
  }
  res.send(candidate)
  
 }

exports.find = (req, res) => {
    Candidate.find()
    .then((candidate) => res.json(candidate))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const candidate = new Candidate(req.body);
  candidate.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const candidate = new Candidate(req.body);
  Pikod.updateOne(candidate)
    .then((candidate) => res.json(candidate))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
    Candidate.deleteOne({ _id: req.params.id })
    .then((candidate) => res.json(candidate))
    .catch((err) => res.status(400).json("Error: " + err));
};