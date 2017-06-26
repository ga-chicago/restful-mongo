var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	path = require('path'),
	bodyParser = require('body-parser'),
	Dog = require('./models/Dog');

	require('./db/db')

app.use(bodyParser.urlencoded({extended: true}));

app.get('/dogs', function(request, response){
	Dog.find(function(err, dogs){
		console.log(dogs)
		response.json(dogs);
	})
});

app.get('/dogs/:id', function(request, response){
	var id = request.params.id;
	Dog.findById(id, function(err, dog){
		response.json(dog);
	})
})

app.post('/dogs', function(request, response){
	console.log(request.body)
	var dog = new Dog({
		name: request.body.name,
		breed: request.body.breed,
		age: request.body.age,
		goodDog: request.body.goodDog
	})
	dog.save();
	response.send('success')
})

app.patch('/dogs/:id', function(request, response){
	var id = request.params.id;
	Dog.findById(id, function(err, dog){
		dog.name = request.body.name;
		dog.breed = request.body.breed;
		dog.age = request.body.age;
		dog.goodDog = request.body.goodDog;
		dog.save();
		response.json(dog);
	})
})

app.delete('/dogs/:id', function(request, response){
	var id = request.params.id;
	Dog.findById(id, function(err, dog){
		dog.remove();
		response.json('success');
	})
})


server.listen(3000, function(){
	console.log("listening on port 3000")
})