const mongoose = require('mongoose')

var projectSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    project :{
        type:String
    },
    budget:{
        type:String
    },
    details:{
        type:String
    },
    
})

module.exports= mongoose.model("Project",projectSchema)