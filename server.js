// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var request = require('request');
var apiTok = require('./ApiToken.js');

//request.post('https://api.justyo.co/yoall/', {form: { api_token: apiTok }});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//var port = process.env.PORT || 8080;        // set our port
var port = 80;

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
    console.log('We have sent our response');
});

router.route('/testyo')
    .get(function (req, res) {
        //Send a Yo Back
        //console.log("We have received a yo");
        //request.post('https://api.justyo.co/yoall/', {form: { api_token: apiTok }});
    })

router.route('/up')
    .get(function (req, res) {
        //Send a Yo Back
        console.log("Received Up");
    })

router.route('/down')
    .get(function (req, res) {
        //Send a Yo Back
        console.log("Received Down");
    })

router.route('/left')
    .get(function (req, res) {
        //Send a Yo Back
        console.log("Received Left");
    })

router.route('/right')
    .get(function (req, res) {
        //Send a Yo Back
        console.log("Received Right");
    })

router.route('/a')
    .get(function (req, res) {
        //Send a Yo Back
        console.log("Received A");
    })

router.route('/b')
    .get(function (req, res) {
        //Send a Yo Back
        console.log("Received B");
    })

router.route('/Select')
    .get(function (req, res) {
        //Send a Yo Back
        console.log("Received Select");
    })

router.route('/Start')
    .get(function (req, res) {
        //Send a Yo Back
        console.log("Received Start");
    })

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/yo/pokemon', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

//request.post('https://api.justyo.co/yoall/', {form: { api_token: apiTok }});
//

