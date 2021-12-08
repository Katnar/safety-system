const Job = require("../../models/general/job");

exports.findById = async(req, res) => {
  const job = await Job.findOne().where({_id:req.params.id})
  
  if(!job){
      res.status(500).json({success: false})
  }
  res.send(job)
  
 }

exports.find = (req, res) => {
    Job.find()
    .then((job) => res.json(job))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const job = new Job(req.body);
  job.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const job = new Job(req.body);
  Pikod.updateOne(job)
    .then((job) => res.json(job))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
    Job.deleteOne({ _id: req.params.id })
    .then((job) => res.json(job))
    .catch((err) => res.status(400).json("Error: " + err));
};