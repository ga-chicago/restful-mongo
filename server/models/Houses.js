var mongoose = require('mongoose');

var HouseSchema = new mongoose.Schema({
	name: String,
	region: String,
	words: String,
	sigil: String,
	hasDragons: Boolean
})

var houseModel = mongoose.model("Houses", HouseSchema);

module.exports = houseModel;