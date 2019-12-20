const mongoose = require('mongoose')
mongoose.set('debug', true);

mongoose.connect("mongodb://localhost/contact",{ useNewUrlParser: true ,useUnifiedTopology: true });


mongoose.Promise = Promise;

module.exports.Contact = require("./contact")