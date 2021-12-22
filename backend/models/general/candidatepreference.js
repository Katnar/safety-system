const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const candidatepreferenceSchema = new mongoose.Schema({
    mahzor:{type:ObjectId , ref:'Mahzor'},
    candidate:{type:ObjectId,ref:'Candidate'},
    certjobpreference1:{type:ObjectId,ref:'Job'},
    certjobpreference2:{type:ObjectId,ref:'Job'},
    certjobpreference3:{type:ObjectId,ref:'Job'},
    noncertjobpreference1:{type:ObjectId,ref:'Job'},
    noncertjobpreference2:{type:ObjectId,ref:'Job'},
    noncertjobpreference3:{type:ObjectId,ref:'Job'},
});

const Candidatepreference = mongoose.model('Candidatepreference', candidatepreferenceSchema);

module.exports = Candidatepreference;

