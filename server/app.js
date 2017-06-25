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
    //call in the Book collection
    Book.find(function(err, book))
    var allBooks =

})

server.listen(3000, function(){
    console.log("Server running on port 3000")
})
