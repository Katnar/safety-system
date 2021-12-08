const Candidatepreference = require("../../models/general/candidatepreference");

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
  Pikod.updateOne(candidatepreference)
    .then((candidatepreference) => res.json(candidatepreference))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
    Candidatepreference.deleteOne({ _id: req.params.id })
    .then((candidatepreference) => res.json(candidatepreference))
    .catch((err) => res.status(400).json("Error: " + err));
};