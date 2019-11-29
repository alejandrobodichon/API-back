// Initialize express router
let router = require('express').Router();
let apiController = require('./controllers/apiControllers');
       
    

// Set default API response
router.get('/', function (req, res) 
{
    res.json(
    {
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});

//EndPoint para insertar request
router.post('/insertRequest/Request',function(req,res)
{
    console.log(req.body);
    apiController.insertRequest(req,res);
});
//EndPoint para leer toda la base
router.get('/getRequest',function(req,res)
{
    console.log("leer Requests");
    apiController.getRequests(req,res);
});

//EndPoint para leer toda la base
router.post('/login',function(req,res)
{
    console.log("login");
    apiController.postLogin(req,res);
});
//EndPoint para leer con filtro
router.post('/createUser',function(req,res)
{
    console.log("insertar usuario");
    apiController.insertUser(req,res);
});

router.post('/getFilteredRequests',function(req,res)
{
    console.log("filteredRequest");
    apiController.postFilteredRequests(req,res);
});

//EndPoint para modificar en la BD
router.post('/createQuotation',function(req,res)
{
    apiController.createQuotation(req,res);
});












//EndPoint para leer toda la base
router.get('/leerAgenda',function(req,res)
{
    console.log("leer");
    apiController.getContactos(req,res);
});
//EndPoint para leer con filtro
router.post('/leerAgenda/?idBusqueda',function(req,res)
{
    console.log("leer con filtro");
    apiController.getContactosById(req,res);
});
//EndPoint para insertar en la BD
router.post('/insertContacto/Contacto',function(req,res)
{
    console.log(req.body);
    apiController.insertContacto(req,res);
});

//EndPoint para modificar en la BD
router.post('/updateContacto/Contacto',function(req,res)
{
    apiController.updateContacto(req,res);
});

//EndPoint para eliminar en la BD
router.delete('/deleteContacto/Contacto',function(req,res)
{
    apiController.deleteContacto(req,res);
});
// Export API routes
module.exports = router;