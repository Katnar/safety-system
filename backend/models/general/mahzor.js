const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const mahzorSchema = new mongoose.Schema({
    name:{type:String},
    startdate:{type:Date},
    enddate:{type:Date},
    affiliation:{type:ObjectId , ref:'Affiliation'},
    candidates:[{type:ObjectId,ref:'Candidate'}],
    jobs:[{type:ObjectId,ref:'Job'}],
});

const Mahzor = mongoose.model('Mahzor', mahzorSchema);

module.exports = Mahzor;

