const Finalunitpreference = require("../../models/general/finalunitpreference");

exports.findById = async(req, res) => {
  const finalunitpreference = await Finalunitpreference.findOne().where({_id:req.params.id})
  
  if(!finalunitpreference){
      res.status(500).json({success: false})
  }
  res.send(finalunitpreference)
  
 }

exports.find = (req, res) => {
    Finalunitpreference.find()
    .then((finalunitpreference) => res.json(finalunitpreference))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const finalunitpreference = new Finalunitpreference(req.body);
  finalunitpreference.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const finalunitpreference = new Finalunitpreference(req.body);
  Finalunitpreference.updateOne(finalunitpreference)
    .then((finalunitpreference) => res.json(finalunitpreference))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
    Finalunitpreference.deleteOne({ _id: req.params.id })
    .then((finalunitpreference) => res.json(finalunitpreference))
    .catch((err) => res.status(400).json("Error: " + err));
};