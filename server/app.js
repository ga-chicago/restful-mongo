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

app.get("/fish/:id", function(req, res) {
	Fish.findById(req.params.id, function(err, fish) {
		res.json(fish);
	})
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

app.patch("/fish/:id", function(req, res) {
	Fish.findById(req.params.id, function(err, fish) {
		fish.name = req.body.name || fish.name; // if the patch request was blank/undefined, revert back to the previous value
		fish.size = req.body.size || fish.size;
		fish.location = req.body.location || fish.location;
		fish.haveCaught = req.body.haveCaught || fish.haveCaught;
		fish.save();
		res.json(fish);
	});
});

app.delete("/fish/:id", function(req, res) {
	Fish.findByIdAndRemove(req.params.id, function(err, fish) { // found this function that does both at once
		res.json("success");
	});
});

server.listen(3000, function(){
	console.log("Listening on port 3000")
});