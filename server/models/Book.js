var mongoose = require('mongoose')

var BookSchema = new mongoose.Schema({
    about: String,
    numberOfPages: Number,
    author: String,
    datePublished: Number,
    genre: String
})

var bookModel = mongoose.model('Book', BookSchema);

module.exports = bookModel;
