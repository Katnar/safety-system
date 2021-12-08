const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const candidatepreferenceSchema = new mongoose.Schema({
    mahzor:{type:ObjectId , ref:'Mahzor'},
    candidate:{type:ObjectId,ref:'Candidate'},
    certpreference1:{type:ObjectId,ref:'Job'},
    certpreference2:{type:ObjectId,ref:'Job'},
    certpreference3:{type:ObjectId,ref:'Job'},
    noncertpreference1:{type:ObjectId,ref:'Job'},
    noncertpreference1:{type:ObjectId,ref:'Job'},
    noncertpreference1:{type:ObjectId,ref:'Job'},
});

const Candidatepreference = mongoose.model('Candidatepreference', candidatepreferenceSchema);

module.exports = Candidatepreference;

