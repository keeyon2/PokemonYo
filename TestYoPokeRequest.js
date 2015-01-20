// Not used yet in Yokemon, but this is how I would send YO back
var request = require('request');
var apiTok = require('./ApiToken.js');

request.post('https://api.justyo.co/yoall/', {form: { api_token: apiTok }});


