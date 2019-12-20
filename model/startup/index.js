const mongoose = require('mongoose')
const URI = "mongodb://sarthak:sarthak12@ds249017.mlab.com:49017/notepad";
mongoose.set('debug', true);
mongoose.Promise = global.Promise


mongoose.connect(URI,{ useNewUrlParser: true ,useUnifiedTopology :true },(err)=>{
    if (err){
        console.log(err)
    }else{
        console.log("Connection Successful")
    }
});


mongoose.Promise = Promise;

module.exports.Startup = require("./startup")