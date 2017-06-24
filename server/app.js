var express = require('express');
var app = express();
var server = require("http").createServer(app);
var path = require('path');
var bodyParser = require("body-parser");
var GotHouse = require('./models/Houses');

	require('./db/db');


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

app.get('/houses/:id', function(request, response){
	response.json(houses);
	console.log("booty");
})

app.post('/houses', function(request, response){
	console.log(request.body);

	var house = new GotHouse({
		name: request.body.name,
		region: request.body.region,
		words: request.body.words,
		sigil: request.body.sigil,
		hasDragons: request.body.hasDragons})

	house.save();
	response.send("success");

})

app.patch('/houses/:index', function(request,response){
	
	var data = request.body;
	var index = request.params.index;
	houses[index] = data;
	response.json('success');
})

app.delete('/houses/:index', function(request, response){

	var data = request.body;
	var index = request.params.index;
	houses.splice(index, 1);

	response.json('success');
})



server.listen(3000, function(){
	console.log("listening on port 3000");
})