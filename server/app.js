var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	path = require('path'),
	hbs = require('hbs'),
	bodyParser = require('body-parser'),
	Purchase = require('./models/customer');

	require('./db/db.js')

	app.use(bodyParser.urlencoded({extended: true}));

	app.use(express.static(path.join(__dirname, 'public')));

	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'hbs');

app.get('/home', function(req, res) { 
	Purchase.find(function(err, purchases){
		var allPurchases = {purchases: purchases}
		res.render('home', allPurchases)
	})
});

app.get('/purchases', function(request, res) {
	var purchaes = Purchase.find(function(err, purchases) {
		console.log(purchases)
		res.json(purchases)
	})
})

app.get('/purchases/:id', function(req, res){
	var id = req.params.id;
	Purchase.findById(id, function(err, purchase){
		res.json(purchase)
	})
})

app.post('/purchases', function(request, res) {
	var purchase = new Purchase({
		name: request.body.name, 
		date: request.body.date,
		item: request.body.item, 
		amount: request.body.amount,
		member: request.body.member})
	purchase.save();
	//list a new wine from the request body
	res.json("success")
})

app.patch('/purchases/:id', function(req, res){
	var id = req.params.id;
	Purchase.findById(id, function(err, purchase){
		purchase.name = req.body.name;
		purchase.date = req.body.date;
		purchase.item = req.body.item;
		purchase.amount = req.body.amount;
		purchase.member = req.body.member;
		purchase.save();
		res.json(purchase);
	})
})

app.delete('/purchases/:id', function(req, res){
	var id = req.params.id;
	Purchase.findById(id, function(err, purchase){
		purchase.remove()
		res.json('item removed');
	})
})

server.listen(3000, function() {
	console.log('listening on port 3000')
});