const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    lastName:{
        type:String,
        required: true
    },
    firstName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true
    }

})


module.exports= mongoose.model("user",UserSchema)