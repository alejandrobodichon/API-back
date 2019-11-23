var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    user:String,
    password: String,
    rol: String
});

var Users = mongoose.model('User', userSchema);
console.log("se creo modelo usuario");
module.exports = Users;