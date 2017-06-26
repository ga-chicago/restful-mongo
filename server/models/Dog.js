var mongoose = require('mongoose');

var DogSchema = new mongoose.Schema({
	name: String,
	breed: String,
	age: Number,
	goodDog: Boolean
})

var dogModel = mongoose.model('Dog', DogSchema);

module.exports = dogModel;