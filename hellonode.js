const express = require('express');
const app = express();
const router = express.Router();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
app.use(bodyParser.json());
var loginResult;

// Serve static files
app.use(express.static(__dirname + '/www/')); 

// Route for login.
app.get('/login', function(req, res){
  res.sendFile(__dirname + '/www/auth/login.html');
});

// send back login result to /login
app.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  if (req.body.username == "DummyUsername" && req.body.password == "DummyPassword") {
    loginResult = {'Login' : "Success" };
  } else {
    loginResult = {'Login': false,errors:{res}};
  }
  return res.send(loginResult);
});

// Route for global.css
app.get('/global.css', function(req, res){
  res.sendFile(__dirname + '/www/global.css');
});

// Route for attempt.js
app.get('/attempt', function(req, res) {
  res.sendFile(__dirname + '/www/auth/attempt.js');
});

app.get('/getData', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(loginResult));
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