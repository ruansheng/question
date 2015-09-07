var express = require('express');
var hbs = require('hbs');

var routes = require('./routes/routes').routes;
var logger = require('./lib/logger').logger;
var login_controller = require('./controller/login_controller').login_controller;
var index_controller = require('./controller/index_controller').index_controller;

var app = express();

app.set('port', process.ENV || 3000);

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
 * http://localhost:port/login
 */
app.get(routes.login, login_controller.login);

/**
 * index routes
 * http://localhost:port
 */
app.get(routes.index, index_controller.index);

/**
 * listen
 */
app.listen(app.get('port'), function(){
	logger.echo('question is running at localhost:' + app.get('port'));
});
