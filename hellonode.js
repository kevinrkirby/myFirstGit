<<<<<<< HEAD
var http = require("http");
var fs = require('fs');
var port = 8080;
var serverUrl = "127.0.0.1";
var counter = 0;

var server = http.createServer(function (req, res) {

    counter++;
    console.log("Request: " + req.url + " (" + counter + ")");

    if (req.url == "/index.html") {

        fs.readFile("index.html", function (err, text) {
            res.setHeader("Content-Type", "text/html");
            res.end(text);
        });
        return;

    }

    res.setHeader("Content-Type", "text/html");
    res.end("<p>Hello World. Request counter: " + counter + ".</p>");

});

console.log("Starting web server at " + serverUrl + ":" + port);
server.listen(port, serverUrl);
=======
//Load HTTP module
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log("hello world");  
  console.log(`Server running at http://${hostname}:${port}/`);
});
>>>>>>> 771c62e9f43d008d5dc78a8fa8927e4faf27b23d
