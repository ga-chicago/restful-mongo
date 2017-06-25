var express = require('express'), 
	app 	= express();
	server 	= require('http').createServer(app),
	path 	= require('path'),
	bodyParser = require('body-parser'),
	Restaurant 	= require('./models/Restaurant.js');

app.get('/test', function(request, response){
    response.send('testing 123');
})


//fire up server
server.listen(3000, function(){
	console.log('listening on port 3000')
})