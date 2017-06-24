var express = require("express"),
	app = express(),
	server = require("http").createServer(app),
	bodyParser = require("body-parser"),
	Fish = require("./models/Fish");

require("./db/db");

app.use(bodyParser.urlencoded({extended: true}));


app.get("/fish", function(req, res) {
	Fish.find(function(err, fish) {
		res.json(fish);
	})
});

app.get("/fish/:index", function(req, res) {
});

app.post("/fish", function(req, res) {
	var fish = new Fish({
		name: req.body.name,
		size: req.body.size,
		location: req.body.location,
		haveCaught: req.body.haveCaught
	});
	fish.save();
	res.json(fish);
});

app.patch("/fish/:index", function(req, res) {
});

app.delete("/fish/:index", function(req, res) {
});

server.listen(3000, function(){
	console.log("Listening on port 3000")
});