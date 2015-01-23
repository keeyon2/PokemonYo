// Not used yet in Yokemon, but this is how I would send YO back
var request = require('request');
var SecretInfo = require('./SecretInfo.js');

request.post('https://api.justyo.co/yo/', {form: {username: 'KEEKOMAN', api_token: SecretInfo.apiKeys.testYo}});



