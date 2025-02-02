var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.write(req.url);
  var q = url.parse(req.url, true).query;
  var txt = q.type + " " + q.id; 
  res.end(); //end the response
}).listen(8080,()=>{console.log("listining")}); //the server object listens on port 8080
