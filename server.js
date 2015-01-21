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
var hitKey = require('./hitkeyModule.js');
var port = 80;

//Connect to Database
// =============================================================================
mongoose.connect(secretInfo.mongoDBinfo.fullString);

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.use('/', function(req, res, next) {
    // Add username or update count
    var UsersWithName = User.findOne({name: req.query.username}, function(err, data){
        if(err)
            console.log('find error: ' + err);
        //We need to calculate correct tab value to have count line up
        var tabsNumber = 3 - (req.query.username.length / 4)
        var tabsString = '';
        for (i = 0; i < tabsNumber; i++)
        {
            tabsString = tabsString + '\t';
        }
        // Create new user
        if(!data)
        {
            User.create({name: req.query.username, count: 1, last_yo_at: Date.now()},
                function(err, user){
                    if(err) console.log('creation error: ' + err);
                });
            console.log("YO From: " + req.query.username + tabsString + "YO Count: 1");
        }
        
        // Update count and date
        else
        {
            data.count = data.count + 1;
            data.last_yo_at = Date.now()
            console.log("YO From: " + req.query.username + tabsString + "YO Count: " + data.count);
            data.save(function (err) {
                if(err) console.log("Adding count + 1 error: " + err);
            });
        }
    });
    next();
});

router.route('/testyo')
    .get(function (req, res) {
        //hitKey('S'); 
    })

router.route('/up')
    .get(function (req, res) {
        hitKey('Up');
    })

router.route('/down')
    .get(function (req, res) {
        hitKey('Down');
    })

router.route('/left')
    .get(function (req, res) {
        hitKey('Left');
    })

router.route('/right')
    .get(function (req, res) {
        hitKey('Right');
    })

router.route('/A')
    .get(function (req, res) {
        hitKey('z');
    })

router.route('/B')
    .get(function (req, res) {
        hitKey('x');
    })

router.route('/select')
    .get(function (req, res) {
        hitKey('Backspace');
    })

router.route('/start')
    .get(function (req, res) {
        hitKey('Enter');
    })

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true })); // parsing x-www-form-urlencoded
app.use(bodyParser.json()); // parsing json
app.use(multer()); // parsing multipart/form-data

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /yo/pokemon
app.use('/yo/pokemon', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
