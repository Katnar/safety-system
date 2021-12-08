const Finaleshkol = require("../../models/general/finaleshkol");

exports.findById = async(req, res) => {
  const finaleshkol = await Finaleshkol.findOne().where({_id:req.params.id})
  
  if(!finaleshkol){
      res.status(500).json({success: false})
  }
  res.send(finaleshkol)
  
 }

exports.find = (req, res) => {
    Finaleshkol.find()
    .then((finaleshkol) => res.json(finaleshkol))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const finaleshkol = new Finaleshkol(req.body);
  finaleshkol.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const finaleshkol = new Finaleshkol(req.body);
  Pikod.updateOne(finaleshkol)
    .then((finaleshkol) => res.json(finaleshkol))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
    Finaleshkol.deleteOne({ _id: req.params.id })
    .then((finaleshkol) => res.json(finaleshkol))
    .catch((err) => res.status(400).json("Error: " + err));
};