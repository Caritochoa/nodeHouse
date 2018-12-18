var http = require("http");
var fs = require("fs");

function onRequest(req, res) {
  res.writeHead(200, { "content-Type": "text/html" });
  fs.readFile("./index.html", function(error, data) {
    if (error) {
      res.writeHead(404);
      res.write("file not found");
    } else {
      res.write(data);
    }
    res.end();
  });
}

http.createServer(onRequest).listen(3000);
