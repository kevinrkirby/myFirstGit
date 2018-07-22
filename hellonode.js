const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');

// Serve static files
app.use(express.static(__dirname + '/www/')); 

app.use(bodyParser.urlencoded({
  extended: true
}));

// Route for login.
app.get('/login', function(req, res){
  res.sendFile(__dirname + '/www/auth/login.html');
});

// Post data to attempt.js
app.post('/attempt', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var jsonData = {
    "username" : username,
    "password" : password
  };
});

// Route for loging submission
app.get('/attempt', function(req, res) {
  res.sendFile(__dirname + '/www/auth/attempt.js');
});

app.get('/getData', function(req, res) {
  var myObject = { 
    "username": "DummyUsername",
    "password": "DummyPassword",
  };
  res.send(JSON.stringify(myObject, null, 3));
});

// Route for everything else.
app.get('*', function(req, res){
    res.sendFile(__dirname + '/www/not-found.html');
  });

var server = http.listen(3000, "127.0.0.1", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("My First Nodejs Server!");
  console.log("Server listening on: http://"+ host +":" + port);
});