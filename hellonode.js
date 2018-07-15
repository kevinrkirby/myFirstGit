var path = require('path');
var express = require('express');
var logger = require('morgan');
var app = express();

// Log the requests
app.use(logger('dev'));

// Serve static files
app.use(express.static(path.join(__dirname, '/'))); 

// Route for everything else.
app.get('*', function(req, res){
  res.send('Hello World');
});

// Fire it up!
app.listen(8080);
console.log('Listening http://127.0.0.1:8080/');