const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const finaleshkolSchema = new mongoose.Schema({
    mahzor:{type:ObjectId,ref:'Mahzor'},
    job:{type:ObjectId,ref:'Job'},
    candidates:{type:ObjectId,ref:'Candidate'},
    finalconfirmation:{type:Boolean},
});

const Finaleshkol = mongoose.model('Finaleshkol', finaleshkolSchema);

module.exports = Finaleshkol;

