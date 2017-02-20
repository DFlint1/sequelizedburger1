//  here we will import the following:
// burger.js
// and create the router for the app
// and export the router 

var express = require('express');
var methodOverride = require('method-override');
var router = express.Router();
var bodyParser = require('body-parser');

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

//redirect to burger route by default
router.get('/', function(req, res) {
    res.redirect('/burgers');
});

// Create all our routes and set up logic within those routes where required.
router.get('/burgers', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burgers/create', function(req, res) {
  burger.insertOne('burger_name', req.body.name, function(){
    res.redirect('/burgers');
  });
});
//update the route
router.put('/burgers/update/devour/:id', function(req, res) {
  burger.updateOne('burgers','devoured', req.params.id, function() {
   
    res.redirect('/burgers');
  })
});

//method override allows delete function to work here
router.delete('/burgers/delete/:id', function(req, res) {
    burger.deleteOne('burgers', req.params.id, function() {
    res.redirect('/burgers');
  });
});

//initial load/direct
router.use(function(req, res) {
    res.redirect('/burgers');
})

// Export routes for server.js to use.
module.exports = router;