const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const ogdaSchema = new mongoose.Schema({
    name:{type:String},
    pikod:{type:String},
    _id:{type:String},
});

const Ogda = mongoose.model('Ogda', ogdaSchema);

module.exports = Ogda;