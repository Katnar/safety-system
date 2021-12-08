const Mahzor = require("../../models/general/mahzor");

exports.findById = async(req, res) => {
  const mahzor = await Mahzor.findOne().where({_id:req.params.id})
  
  if(!mahzor){
      res.status(500).json({success: false})
  }
  res.send(mahzor)
  
 }

exports.find = (req, res) => {
    Mahzor.find()
    .then((mahzor) => res.json(mahzor))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const mahzor = new Mahzor(req.body);
  mahzor.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const mahzor = new Mahzor(req.body);
  Pikod.updateOne(mahzor)
    .then((mahzor) => res.json(mahzor))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
    Mahzor.deleteOne({ _id: req.params.id })
    .then((mahzor) => res.json(mahzor))
    .catch((err) => res.status(400).json("Error: " + err));
};