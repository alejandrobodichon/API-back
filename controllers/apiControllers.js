var Contactos = require('../models/ContactoModel');
var Requests = require('../models/RequestModel');
var Users = require('../models/UserModel');
var bodyParser = require('body-parser');

    
let getRequests = (req, res) =>
{      
    console.log("llegue a leer las Request");
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
    console.log("intentando insertar request" + req.body);
    var newRequest = Requests({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        startDate : req.body.startDate,
        state: req.body.state,
        quotations: req.body.quotations

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

let postFilteredRequests = (req, res) =>
{      
    console.log("postFilteredRequests");
    //Listar resultados
    console.log(req.body);

    Requests.find({category: req.body.category},function(err,result)
    {
        //devuelvo resultado query   
        //console.log(listaContactos); 
        console.log(result);
        if(result != null){
            res.status(200).send({ result});
        } else {
            res.status(201).send({"error": "no hay registros para esta categoria"})
        }
        //si hay error
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        }
    });
           
};


let createQuotation = (req, res) =>
{      
    console.log("llegue a modificar");
    //Listar resultados
    console.log(req.body);

    Requests.findOneAndUpdate({title: req.body.title},{state: "Cotizado",quotations: {contractor: req.body.contractor ,quotation: req.body.quotation}},function(err,result)
    {
        console.log(result);
        if(result != null){
            res.status(200).send({ result});
        } else {
            res.status(201).send({"error": "no hay registros para esta categoria"})
        }
        //si hay error
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        }
    });
           
};


let postLogin = (req, res) =>
{      
    console.log("llegue a leer");
    //Listar resultados
    console.log(req.body);

    Users.findOne({email: req.body.email,password: req.body.password},function(err,result)
    {
        //devuelvo resultado query   
        //console.log(listaContactos); 
        console.log(result);
        if(result != null){
            res.status(200).send({ "rol": result.rol});
        } else {
            res.status(201).send({"error": "usuario y/o contraseña erronea"})
        }
        //si hay error
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        }
    });
           
};

let insertUser = (req,res) =>
{
    console.log(req.body);
    var newUser = Users({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
        rol: req.body.rol
    });
    newUser.save().
    then
    (
        (newUser)=>
        {
            res.status(200).send(newUser); //devuelvo resultado query       
        },
        (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }
    ) 
}



module.exports = {insertRequest,getRequests,postLogin,insertUser,postFilteredRequests,createQuotation};

