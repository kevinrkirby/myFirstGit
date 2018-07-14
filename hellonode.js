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

server.listen(port, hostname, () => {
  console.log("hello world");  
  console.log(`Server running at http://${hostname}:${port}/`);
});
