var express = require("express"); //bring in express
var app = require("express")(); //initialize variable “app” with express
var http = require("http").Server(app);

var port = process.env.PORT || 3000;

var request = require("request"); // request module is Node package for making HTTP requests.
var path = require("path"); // enables working with directories and file paths.
var fs = require("fs");
var bodyParser = require("body-parser"); // to read  data of POST
app.use(bodyParser.urlencoded({ extended: true })); // can parse nested objects
app.use(bodyParser.json()); //tells the system that you want json to be used

app.use("/javascripts", express.static(__dirname + "/javascripts"));

var DATA = require("./scoredata.json"); //read file
//var DATA_p= JSON.parse(JSON.stringify(DATA));
console.log(DATA);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
  console.log("app.get/ ok");
});
app.get("/2", function(req, res) {
  res.sendFile(__dirname + "/scoredata.json");
  console.log("app.get/ zdvzdok");
});

app.post("/3", function(req, res) {
  console.log("posted data", req.body);
  console.log("POST");
  //modify JSON file that keeps all user name and score.
  //Not added.
});

http.listen(port, function() {
  console.log("listening on *:3000");
});
