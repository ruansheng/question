var express = require('express');
var hbs = require('hbs');

var routes = require('./routes/routes').routes;

var login_controller = require('./controller/login_controller').login_controller;
var index_controller = require('./controller/index_controller').index_controller;

var app = express();

app.use(express.static('public'));
app.set('view engine', 'html');
app.engine('html', hbs.__express);

/**
 * login filter
 */
/*
app.use(function(req,res,next){
	console.log('filter');
	next();
});
*/

/**
 * login routes
 */
app.get(routes.login, login_controller.login);

/**
 * index routes
 */
app.get(routes.index, index_controller.index);

app.listen(3000);
