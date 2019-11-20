var Contactos = require('../models/ContactoModel');
var Requests = require('../models/RequestModel');
var bodyParser = require('body-parser');

    
let getRequests = (req, res) =>
{      
    console.log("llegue a leer");
    //Listar resultados
    Requests.find(function(err,requestList)
    {
        //devuelvo resultado query   
        //console.log(listaContactos); 
        res.status(200).send(requestList);
        //si hay error
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        }
    });
           
};

let insertRequest = (req,res) =>
{
    console.log(req.body);
    var newRequest = Requests({
        title: req.body.title,
        category: req.body.category,
        startDate : req.body.startDate,
        state: req.body.state
    });
    newRequest.save().
    then
    (
        (newRequest)=>
        {
            res.status(200).send(newRequest); //devuelvo resultado query       
        },
        (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }
    ) 
}


module.exports = {insertRequest,getRequests};

