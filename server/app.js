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

// get /books/:id
app.get('/books/:id', function(req, res){
    var id = req.params.id;
    Book.findById(id, function(err, book){
        console.log(id);
        res.json(book);
    });
})
// post /books
app.post('/books', function(req, res){
    console.log(req.body);
var book = new Book ({name: req.body.name,
               type: req.body.type,
               region: req.body.region,
               vintage: req.body.vintage,
               organic: req.body.organic})
    book.save();
    res.send('success');
})
// patch /books/:id
app.patch('/books/:id', function(req, res){
    var id = req.params.id;
    Book.findById(id, function(err, book){
        book.name = req.body.name;
        book.type = req.body.type;
        book.region = req.body.region;
        book.vintage = req.body.vintage;
        book.organic = req.body.organic;
        book.save();
        res.json(book);
    })
})

// delete /books/:id
app.delete('/books/:id', function(req, res){
    var id = req.params.id;
    Book.findById(id, function(err, book){
        book.remove();
        res.json("success")
    })
})


server.listen(3000, function(){
    console.log("Server running on port 3000")
})
