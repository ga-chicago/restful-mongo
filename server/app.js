var express = require('express'), 
	app 	= express();
	server 	= require('http').createServer(app),
	path 	= require('path'),
	bodyParser = require('body-parser'),
	Sushi 	= require('./models/Sushi.js');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/test', function(request, response){
    response.send('testing 123');
})

//get all sushi
app.get('/sushi/', function(request, response){
     //return all the sushi
})

//get sushi by id
app.get('/sushi/:id', function(request, response){
     //return a specific sushi roll by id
 })

//post /sushi --> use ajax function to actually post it
app.post('/sushi', function(request, response){
      //create a new sushi from the request body
})

//patch /wines/:id
app.patch('/sushi/:id', function(request, response){
      //update sushi id with the request body
})

//delete /sushi/:id
app.delete('/sushi/:id', function(request, response){
      //delete the sushi by id
})


//fire up server
server.listen(3000, function(){
	console.log('listening on port 3000')
})