var express = require('express'),
	app 	= express.Router();

app.get('/', function(req, res){
	res.render('index')
})

module.exports = app;
