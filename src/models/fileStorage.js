const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    fileUrl:{type:String,default:null},

},{timestamps:true})


module.exports = mongoose.model("Uploads",UserSchema);