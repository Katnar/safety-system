const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const candidateSchema = new mongoose.Schema({
    personalnumber:{type:Number},
    firstname:{type:String},
    lastname:{type:String},
    migzar:{type:String},
    gender:{type:String},
    cellphone:{type:Number},
    rank:{type:String},
    //affiliation:{type:ObjectId , ref:'Affiliation'},
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;

