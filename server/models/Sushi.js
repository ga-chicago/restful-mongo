var mongoose = require('mongoose');

var SushiSchema = new mongoose.Schema({
    name: String,
    type: String,
    vegetarian: Boolean,
   	cost: Number
 })

var sushiModel = mongoose.model('Sushi', SushiSchema);

module.exports = sushiModel;