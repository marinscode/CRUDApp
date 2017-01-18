var mongoose = require('mongoose');

var BookSchema = mongoose.Schema({
	title: String,
	description: String,
	pages: Number
});

var Book = module.exports = mongoose.model('Book', BookSchema);

