const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema


const affiliationSchema = new mongoose.Schema({
    name:{type:String},
});

const Affiliation = mongoose.model('Affiliation', affiliationSchema);

module.exports = Affiliation;

