var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var requestSchema = new Schema({
    title:String,
    description:String,
    category: String,
    startDate: String,
    state: String,
    quotations:  [{contractor:String, quotation:String}]
});

var Requests = mongoose.model('Request', requestSchema);
//console.log("se creo modelo");
module.exports = Requests;