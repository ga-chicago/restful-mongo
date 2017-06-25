var mongoose = require('mongoose')

var BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    numberOfPages: Number,
    genre: String,
    datePublished: Number
})

var bookModel = mongoose.model('Book', BookSchema);

module.exports = bookModel;
