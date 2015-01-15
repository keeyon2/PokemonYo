var http = require('http');
var url = require('url');
var port = 80;
var apiToken = require('./ApiToken.js');

var data = JSON.stringify({
    api_token: apiToken
});


var options = {
    hostname: 'https://api.justyo.co',
    path: '/yoall',
    port: '80',
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        'Content-length': data.length
    }
};

var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
});
debugger;
req.on('error', function(e) {
    console.log('problem with the request: ' + e.message);
});

req.write(data);
req.end();
