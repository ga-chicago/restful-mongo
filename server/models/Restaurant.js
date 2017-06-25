var mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
    name: String,
    type: String,
    cost: Number,
    organic: Boolean
 })

var reastaurantModel = mongoose.model('Restaurant', RestaurantSchema);

module.exports = reastaurantModel;