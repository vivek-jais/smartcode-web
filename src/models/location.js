const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({

    location:{type:String,default:null},

},{timestamps:true});

module.exports = mongoose.model("ServerLoc",LocationSchema);