const mongoose = require('mongoose')

var startupSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    project:{
        type:String
    },
    role:{
        type:String
    },
    message:{
        type:String
    },
    
})

module.exports= mongoose.model("Startup",startupSchema)