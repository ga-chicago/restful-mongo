var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    server = require('http').createServer(app),
    path = require('path')
    Book = require('./models/Book.js')

    require('.db/db')

    
