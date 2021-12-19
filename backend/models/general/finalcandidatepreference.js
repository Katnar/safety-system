const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const finalcandidatepreferenceSchema = new mongoose.Schema({
    mahzor:{type:ObjectId , ref:'Mahzor'},
    candidate:{type:ObjectId,ref:'Candidate'},
    certjobpreference1:{type:ObjectId,ref:'Job'},
    certjobpreference2:{type:ObjectId,ref:'Job'},
    certjobpreference3:{type:ObjectId,ref:'Job'},
    noncertjobpreference1:{type:ObjectId,ref:'Job'},
    noncertjobpreference1:{type:ObjectId,ref:'Job'},
    noncertjobpreference1:{type:ObjectId,ref:'Job'},
});

const FinalCandidatepreference = mongoose.model('FinalCandidatepreference', finalcandidatepreferenceSchema);

module.exports = FinalCandidatepreference;

