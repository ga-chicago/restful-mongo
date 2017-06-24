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
	response.send("hello");
	console.log("hello");

})

app.post('/theNorth', function(request, response){
	var houses = request.body.house
	response.json('success');
})

app.patch('/theNorth/:index', function(request,response){
	response.json('success');
})

app.delete('/theNorth/:index', function(request, response){

	response.json('success');
})



server.listen(3000, function(){
	console.log("listening on port 3000");
})