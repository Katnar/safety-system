const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const preferenceSchema = new mongoose.Schema({
    mahzor:{type:ObjectId , ref:'Mahzor'},
    candidate:{type:ObjectId,ref:'Candidate'},
    certpreference1:{type:ObjectId,ref:'Job'},
    certpreference2:{type:ObjectId,ref:'Job'},
    certpreference3:{type:ObjectId,ref:'Job'},
    noncertpreference1:{type:ObjectId,ref:'Job'},
    noncertpreference1:{type:ObjectId,ref:'Job'},
    noncertpreference1:{type:ObjectId,ref:'Job'},
});

const Preference = mongoose.model('Preference', preferenceSchema);

module.exports = Preference;

