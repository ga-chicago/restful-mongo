var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    server = require('http').createServer(app),
    path = require('path')
    Book = require('./models/Book.js')

    require('./db/db')

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs')

app.get('/', function(req, res){
    //call in the Book collection | (where does books come from? how does Mongoose know to use books? is this the instantiation of books or does that happen later?)
    Book.find(function(err, books){
        var allBooks = {books: books}
        res.render('home', allBooks)
    })
})

app.get('/books', function(req, res){
    Book.find(function(err, books){
        console.log(books);
        res.json(books)
    }); //mongoose version of db.books.find() in repl
})


server.listen(3000, function(){
    console.log("Server running on port 3000")
})
