// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var request = require('request');
var multer = require('multer');
var secretInfo= require('./SecretInfo.js');
var mongoose = require('mongoose');
var User = require('./models/user');
var port = 80;

//Connect to Database
// =============================================================================
mongoose.connect(secretInfo.mongoDBinfo.fullString);

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.use('/', function(req, res, next) {
    //console.log('Received yo from: ' + req.query.username);
    // Add username or update count
    var UsersWithName = User.findOne({name: req.query.username}, function(err, data){
        if(err)
            console.log('find error: ' + err);
    
        // Create new user
        if(!data)
        {
            User.create({name: req.query.username, count: 1, last_yo_at: Date.now()},
                function(err, user){
                    if(err) console.log('creation error: ' + err);
                });
        }
        
        // Update count and date
        else
        {
            data.count = data.count + 1;
            data.last_yo_at = Date.now()
            data.save(function (err) {
                if(err) console.log("Adding count + 1 error: " + err);
            });
        }
    });
    next();
});

router.route('/testyo')
    .get(function (req, res) {
        console.log("We are in TestYo");
        /*var applescript = require('child_process').spawn(
            'osascript', 
            ["hitkey.scpt"]
        );*/
        var autohotkey = require('child_process').spawn(
            'autohotkey.exe',
            ["hitkey.ahk",
             "S"]
        );
             
        //request.post('https://api.justyo.co/yoall/', {form: { api_token: apiTok["testYo"] }});
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

router.route('/A')
    .get(function (req, res) {
        //Send a Yo Back
        console.log("Received A");
    })

router.route('/B')
    .get(function (req, res) {
        //Send a Yo Back
        console.log("Received B");
    })

router.route('/select')
    .get(function (req, res) {
        //Send a Yo Back
        console.log("Received Select");
    })

router.route('/start')
    .get(function (req, res) {
        //Send a Yo Back
        console.log("Received Start");
    })

// more routes for our API will happen here

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true })); // parsing x-www-form-urlencoded
app.use(bodyParser.json()); // parsing json
app.use(multer()); // parsing multipart/form-data

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/yo/pokemon', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
//request.post('https://api.justyo.co/yoall/', {form: { api_token: apiTok }});
