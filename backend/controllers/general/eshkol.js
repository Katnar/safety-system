const Eshkol = require("../../models/general/eshkol");

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
  Pikod.updateOne(eshkol)
    .then((eshkol) => res.json(eshkol))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
    Eshkol.deleteOne({ _id: req.params.id })
    .then((eshkol) => res.json(eshkol))
    .catch((err) => res.status(400).json("Error: " + err));
};