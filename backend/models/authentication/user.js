const mongoose = require('mongoose');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const {ObjectId} = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: {type: String,trim: true,required: true,maxlength: 32},
    lastname: {type: String,trim: true,required: true},
    migzar:{type:String},
    gender:{type:String},
    cellphone:{type:Number},
    rank:{type:String},
    hashed_password: {type: String,required: true},
    personalnumber: {type: String,trim: true,unique:true,require:true},
    unitid: {type:ObjectId,ref:'Unit'},
    salt: String,
    role:{type: String,default:"0"},
    validated:{type: Boolean,default:false},
    gdod: {type: String},
    hativa: {type: String},
    ogda: {type: String},
    pikod: {type: String},
    //
    site_permission: {type:String,default:'צפייה ועריכה'},
}, {timestamps: true})

// virtual field
userSchema.virtual('password')
.set(function(password){
    this._password = password
    this.salt = uuidv4();
    this.hashed_password = this.encryptPassword(password)
})
.get(function(){
    return this._password
})

userSchema.methods = {
    authenticate: function(plainText){
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    encryptPassword: function(password){
        if(!password) return '';
        try {
            return crypto.createHmac('sha1', this.salt)
                            .update(password)
                            .digest('hex')
        } catch (err) {
            return "";
        }
    }
};
module.exports = mongoose.model("User", userSchema);