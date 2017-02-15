var config     = require("./config.js").config;
var express    = require("express");
var http       = require("http");
var app        = express();
var bodyParser = require('body-parser');
// Define Database ORM
var orm        = require("orm");

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

// Obteniendo usuarios
app.get("/users/:id", function(req,res){
  
  var response = {};
  response.code = "FAIL";
  response.data = [];

  User.find({id: req.params.id}, function (err, items){
    if ( err ){
      console.log(err);
      res.send(response);
      return;
    }

    response.code = "OK";

    response.data = items;
    res.send(response);

  });

});

// Obteniendo Pedidos
app.get("/orders/:user_id", function(req,res){
  
  var response = {};
  response.code = "FAIL";
  response.data = [];

  Order.find({user_id: req.params.user_id}, function (err, items){
    if ( err ){
      console.log(err);
      res.send(response);
      return;
    }

    response.code = "OK";

    response.data = items;
    res.send(response);

  });

});

// Obteniendo los pedidos de un usuario
/*app.get("/user/:user_id/orders", function(req,res){
  
  var response = {};
  response.code = "FAIL";
  response.data = [];

  User.get(req.params.user_id, function(err, user){
    user.getOrders(function(err, orders){
      console.log(orders);
    })
  })

});*/

var orm = require("orm");
orm.settings.set("instance.cache", false);

orm.connect("mysql://"+config.db.user+":"+config.db.password+"@"+config.db.host+"/"+config.db.database, function (err,db){
  if (err) throw err;

  global.db = db;

  User = db.define("user", {
    id: {type: 'serial', key: true},
    name: String,
    last_name: String,
    email: String,
    phone: String
  });

  Order = db.define("order", {
    id: {type:'serial', key: true},
    code: String,
    user_id: Number,
    created_at: {type: 'date'}
  });

  //User.hasMany("orders", Order);

});