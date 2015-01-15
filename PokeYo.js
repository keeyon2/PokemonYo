var express = require('express');
var fs = require('fs');
var app = express();
var port = process.argv[2];
var fileName = process.argv[3];

// app.get('/books', function (req, res) {
//     var obj;
//     fs.readFile(fileName, function(e, data) {
//         obj = JSON.parse(data);
//         res.json(obj);
//     });
// });
// app.listen(port);
var router = express.Router();
router.get('/', function (req, res) {
    res.json({ message: 'Yo have made a poke get, we will add your user' });
});

// Register Routes
app.use('upButton', router);

app.listen(port);
console.log("MAGIC on port: " + port);
