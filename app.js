var http = require("http")

http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type" : "text/html"})
  res.end("<a href=\"./index.html\">Search Me</a>")
}).listen(8080)

console.log("server running at locathost:8080")
