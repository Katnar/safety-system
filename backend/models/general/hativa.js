const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const hativaSchema = new mongoose.Schema({
    name:{type:String},
    ogda:{type:String},
    _id:{type:String},
    gdod:[{type:String}],

});

const Hativa = mongoose.model('Hativa', hativaSchema);

module.exports = Hativa;