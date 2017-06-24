var mongoose = require("mongoose");

var FishSchema = new mongoose.Schema({
	name: String,
	size: Number,
	location: String,
	haveCaught: Boolean
});

var fishModel = mongoose.model("Fish", FishSchema);

module.exports = fishModel;