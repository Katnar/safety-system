const Finalcandidatepreference = require("../../models/general/finalcandidatepreference");

exports.findById = async(req, res) => {
  const finalcandidatepreference = await Finalcandidatepreference.findOne().where({_id:req.params.id})
  
  if(!finalcandidatepreference){
      res.status(500).json({success: false})
  }
  res.send(finalcandidatepreference)
  
 }

exports.find = (req, res) => {
    Finalcandidatepreference.find()
    .then((finalcandidatepreference) => res.json(finalcandidatepreference))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const finalcandidatepreference = new Finalcandidatepreference(req.body);
  finalcandidatepreference.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const finalcandidatepreference = new Finalcandidatepreference(req.body);
  Finalcandidatepreference.updateOne(finalcandidatepreference)
    .then((finalcandidatepreference) => res.json(finalcandidatepreference))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
    Finalcandidatepreference.deleteOne({ _id: req.params.id })
    .then((finalcandidatepreference) => res.json(finalcandidatepreference))
    .catch((err) => res.status(400).json("Error: " + err));
};