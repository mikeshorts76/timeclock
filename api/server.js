var express = require('express');
var app = express();
 
app.get('/', function(req, res) {
 res.send('Hello Express');
});
 
app.listen(3001, function() {
 console.log("Server is running at 3001 port!");
});