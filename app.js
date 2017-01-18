var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var book = require('./models/books');

var app = express();

var mongoose = require('mongoose');
mongoose.connect('');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're connected");
});

app.set('views', './views');
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/books', function(req, res){
	book.find(function(err, books){
		res.send(books);
	});
});

app.get('/', function(req, res){
	res.render('index');
});

app.post('/process', function(req, res){
	book.create(req.body, function(err,book){
		if(err) throw err;
		res.json(book);
	});
	console.log(req.body);
	
});



app.listen(port);