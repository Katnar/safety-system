const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const candidateSchema = new mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    cellphone:{type:String},
    rank:{type:String},
    affiliation:{type:ObjectId , ref:'Affiliation'},
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;

