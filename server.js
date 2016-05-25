var express = require('express'),
	route	= express.Router(),
	routing = require('./router');

var server = module.exports = 

	express()
		.set('view engine', 'ejs')
		.use(express.static('./public'))
		.set('views', './dev/views')		
		.use(routing)
		.listen(3000, function(){
			console.log('server listen 3000')
		})
