var express = require('express'),
	app 	= express(),
	server 	= require('http').createServer(app),
	path 	= require('path'),
	bodyParser = require('body-parser'),
	Restaurant = require('./models/Restaurant.js'),
	hbs 	= require('hbs');

	require('./db/db.js')

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(express.static(path.join(__dirname, 'public')));

	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'hbs');

//get 1
	app.get('/', function(request, response){
		Restaurant.find(function(err, restaurants){
			var allRestaurants = {restaurants: restaurants};
			response.render('home', allRestaurants);
		})
	})

//get id
	app.get('/restaurant/:id', function(request, response){
		//return a specific restaurant item by id
		var id = request.params.id;
		Restaurant.findById(id, function(err, restaurants){
			response.json(restaurant);
		})
	})

//post
	app.post('/restaurant', function(reqeust, response){
		//create a new restaurant item from the request body
		console.log(request.body)
		//create a model which Mongoose can read
		var restaurant = new Restaurant ({name: request.body.name,
							type: request.body.type,
							cost: request.body.cost,
							organic: request.body.organic
		})
		//save to database
		restaurant.save();

		response.send('success');
	})

//patch by id
app.patch('/restaurant/:id', function(request, response){
	//update a restaurant item by id with the reqeust body
	var id = request.params.id;
	Restaurant.findById(id, function(err, wine){
		restaurant.name = request.body.name;
		restaurant.type = request.body.type;
		restaurant.cost = request.body.cost;
		restaurant.organic = request.body.organic;
		//save to database
		restaurant.save();

		response.json(restaurant);
	})
	
	
})

//delete by id
app.delete('/restaurant/:id', function(request, response){
	//delete the restaurant item by id
	var id = request.params.id;
	Restaurant.findById(id, function(err, wine){
		restaurant.remove();
		response.json('success');

	})
})

//fire up server
server.listen(3000, function(){
	console.log('listening on port 3000')
})



