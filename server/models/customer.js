var mongoose = require('mongoose');

var PurchaseSchema = new mongoose.Schema({
	name: String,
	date: Date,
	item: String,
	amount: Number,
	member: Boolean
})

var purchaseModel = mongoose.model('Purchase', PurchaseSchema);

module.exports = purchaseModel;