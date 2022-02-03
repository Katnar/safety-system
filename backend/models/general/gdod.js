const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const gdodSchema = new mongoose.Schema({
    name:{type:String},
    _id:{type:String},
    hativa:{type:String},
});

const Gdod = mongoose.model('Gdod', gdodSchema);

module.exports = Gdod;
