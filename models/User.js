const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    Lastname:{
        type:String,
        required: true
    },
    Firstname:{
        type:String,
        required: true
    },
    Email:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required: true
    }

})


module.exports= mongoose.model("user",UserSchema,"contactlist")