var mongoose = require('mongoose')

var BookSchema = new mongoose.Schema({
    about: String,
    numberOfPages: Number,
    datePublished: Number,
    genre: String,
    name: String
})

var bookModel = mongoose.model('Book', BookSchema);

module.exports = bookModel;
