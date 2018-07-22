var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

// Serve static files
app.use(express.static(__dirname + '/www/')); 

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
// Route for login.
app.get('/login', function(req, res){
  res.sendFile(__dirname + '/www/auth/login.html');
});

app.post('/attempt.js', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var jsonData = {
    "username" : username,
    "password" : password
  }
  res.send(jsonData);
  console.log(jsonData);
});

// Route for loging submission
app.get('/attempt.js', function(req, res) {
  res.sendFile(__dirname + '/www/auth/attempt.js');
});



// Route for everything else.
app.get('*', function(req, res){
    res.sendFile(__dirname + '/www/not-found.html');
  });



var server = http.listen(3000, "127.0.0.1", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("My First Nodejs Server!");
  console.log("Server listening on: "+ host + " port:" + port);
});