var express = require('express');
var app = express();
var server = require("http").createServer(app);
var path = require('path');
var bodyParser = require("body-parser");

	// require('/db/db');

var houses = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(request, response){
	response.send("butt");
	console.log("hello");
})

app.get('/houses', function(request, response){
	response.json(houses);
	console.log("booty");
})

app.post('/houses', function(request, response){
	var data = request.body;
	houses.push(data);
	response.json('success');
})

app.patch('/houses/:index', function(request,response){
	response.json('success');
})

app.delete('/houses/:index', function(request, response){

	response.json('success');
})



server.listen(3000, function(){
	console.log("listening on port 3000");
})