var express = require('express'), 
	app 	= express();
	server 	= require('http').createServer(app),
	path 	= require('path'),
	bodyParser = require('body-parser'),
	Sushi 	= require('./models/Sushi.js');


var sushi = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



//first test once the server was listening
// app.get('/test', function(request, response){
//     response.send('testing 123');
// })

//get 1 all sushi
app.get('/sushi', function(request, response){
		Sushi.find(function(err, sushi){
			var allSushi = {sushi: sushi};
			response.render('home', allSushi)
		})
	})


// //get 2 sushi by id
app.get('/sushi/:id', function(request, response){
     //return a specific sushi roll by id
     var id = request.params.id;
     Sushi.findById(id, function(err, sushiRoll){
     	response.json(sushi);
     })
 })

// //post /sushi --> use ajax function to actually post it
app.post('/sushi', function(request, response){
      //create a new sushi from the request body
      console.log(request.body)

      var sushi = new Sushi ({name: request.body.name,
      	type: request.body.type,
      	vegetarian: request.body.vegetarian,
      	cost: request.body.cost})

      response.json('success');
     
})

// //patch /wines/:id
app.patch('/sushi/:id', function(request, response){
      //update sushi id with the request body
      var id = request.params.id;
      Sushi.findById(id, function(err, sushiRoll){
      	sushi.name = request.body.name;
		sushi.type = request.body.type;
		sushi.vegetarian = request.body.vegetarian;
		sushi.cost = request.body.cost;
      })

      sushi.save();

      response.json(sushi);

})

// //delete /sushi/:id
app.delete('/sushi/:id', function(request, response){
      //delete the sushi by id
      var id = request.params.id;
      Sushi.findById(id, function(err, sushiRoll){
      	sushi.remove();
      	response.json('success');
      })

})


//fire up server
server.listen(3000, function(){
	console.log('listening on port 3000')
})














