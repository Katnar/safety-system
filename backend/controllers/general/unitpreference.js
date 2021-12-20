const Unitpreference = require("../../models/general/unitpreference");

exports.findById = async(req, res) => {
  const unitpreference = await Unitpreference.findOne().where({_id:req.params.id})
  
  if(!unitpreference){
      res.status(500).json({success: false})
  }
  res.send(unitpreference)
  
 }

exports.find = (req, res) => {
    Unitpreference.find()
    .then((unitpreference) => res.json(unitpreference))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const unitpreference = new Unitpreference(req.body);
  unitpreference.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const unitpreference = new Unitpreference(req.body);
  Unitpreference.updateOne(unitpreference)
    .then((unitpreference) => res.json(unitpreference))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
    Unitpreference.deleteOne({ _id: req.params.id })
    .then((unitpreference) => res.json(unitpreference))
    .catch((err) => res.status(400).json("Error: " + err));
};