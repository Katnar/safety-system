const Jobtype = require("../../models/general/jobtype");

exports.findById = async(req, res) => {
  const jobtype = await Jobtype.findOne().where({_id:req.params.id})
  
  if(!jobtype){
      res.status(500).json({success: false})
  }
  res.send(jobtype)
  
 }

exports.find = (req, res) => {
    Jobtype.find()
    .then((jobtype) => res.json(jobtype))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const jobtype = new Jobtype(req.body);
  jobtype.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const jobtype = new Jobtype(req.body);
  Jobtype.updateOne(jobtype)
    .then((jobtype) => res.json(jobtype))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
    Jobtype.deleteOne({ _id: req.params.id })
    .then((jobtype) => res.json(jobtype))
    .catch((err) => res.status(400).json("Error: " + err));
};