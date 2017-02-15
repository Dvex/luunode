var express = require("express");
var http = require("http");
var app = express();
var bodyParser = require('body-parser');

server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req,res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send("Luu App! I'm rat kid");
});

// Create an HTTP service.
//server.listen(3000);
app.listen(3000, function () {
  console.log('Corriendo en el puerto 3000');
});

app.get("/mail", function(req, res){
	res.send('mailing!');
})