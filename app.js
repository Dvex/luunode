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
  res.send("Mi primera APP con Jenny");

  console.log('Corriendo en el puerto 3000');
  console.log('Un 14 Feb diferente'); // Puedes borrarlo o comentarlo.
});

// Create an HTTP service as process.
server.listen(9000);

/*app.listen(9000, function () {
  console.log('Corriendo en el puerto 3000');
  // Puedes borrarlo o comentarlo.
  console.log('Un 14 Feb diferente');
});*/

app.get("/mail", function(req, res){
	res.send('mailing!');
})