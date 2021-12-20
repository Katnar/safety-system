const Affiliation = require("../../models/general/affiliation");

exports.findById = async(req, res) => {
  const affiliation = await Affiliation.findOne().where({_id:req.params.id})
  
  if(!affiliation){
      res.status(500).json({success: false})
  }
  res.send(affiliation)
  
 }

exports.find = (req, res) => {
    Affiliation.find()
    .then((affiliation) => res.json(affiliation))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const affiliation = new Affiliation(req.body);
  affiliation.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const affiliation = new Affiliation(req.body);
  Affiliation.updateOne(affiliation)
    .then((affiliation) => res.json(affiliation))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
    Affiliation.deleteOne({ _id: req.params.id })
    .then((affiliation) => res.json(affiliation))
    .catch((err) => res.status(400).json("Error: " + err));
};