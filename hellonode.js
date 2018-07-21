var express = require('express');
var app = express();
var http = require('http').Server(app);

// Serve static files
app.use(express.static(__dirname + '/www/')); 

// Route for login.
app.get('/login', function(req, res){
  res.sendFile(__dirname + '/www/login.html');
});

// Route for everything else.
app.get('*', function(req, res){
    res.sendFile(__dirname + '/www/not-found.html');
  });



var server= http.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("My First Nodejs Server!");
  console.log("Server listening on: "+ host + " port:" + port);
});