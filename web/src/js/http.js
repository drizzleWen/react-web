const http = require("http");
const httpProxy = require("http-proxy");

var proxy = httpProxy.createProxyServer({});

proxy.on("error", function(err, req, res) {
  res.writeHead(500, {
    "Content-Type": "text/plain"
  });
  res.end("Something went wrong. And we are reporting a custom error message.");
});

var server = require("http").createServer(function(req, res) {
  var host = req.headers.host,
    ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  console.log(ip);

  switch (host) {
    case "http://v2.webqa.imart360.com/api/*":
      proxy.web(req, res, { target: "http://localhost:3000" });
    case "http://v2.webqa.imart360.com/*":
      proxy.web(req, res, { target: "http://v2.apiqa.imart360.com" });
  }
});

console.log("listen on port 8088");
server.listen(8088);
