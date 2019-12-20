const mongoose = require('mongoose')
mongoose.set('debug', true);

mongoose.connect("mongodb://sarthak:sarthak12@ds249017.mlab.com:49017/notepad",{ useNewUrlParser: true ,useUnifiedTopology: true });



mongoose.Promise = Promise;

module.exports.Project = require("./project")