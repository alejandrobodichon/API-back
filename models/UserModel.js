var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:String,
    surname: String,
    email: String,
    password: String,
    rol: String
});

var Users = mongoose.model('User', userSchema);
//console.log("se creo modelo usuario");
module.exports = Users;