var express = require('express');
var hbs = require('hbs');
var bodyParser = require('body-parser');

var routes = require('./routes/routes').routes;
var logger = require('./lib/logger').logger;
var login_controller = require('./controller/login_controller').login_controller;
var index_controller = require('./controller/index_controller').index_controller;
var questions_controller = require('./controller/questions_controller').questions_controller;
var question_controller = require('./controller/question_controller').question_controller;
var manager_controller = require('./controller/manager_controller').manager_controller;

var app = express();

app.set('port', process.ENV || 3000);

app.use(express.static('public'));
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

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
 * error routes
 */
app.get(routes.error, index_controller.error);

/**
 * login routes
 */
app.get(routes.login, login_controller.login);

/**
 * login routes
 */
app.post(routes.doLogin, login_controller.doLogin);

/**
 * index routes
 */
app.get(routes.index, index_controller.index);

/**
 * questions routes
 */
app.get(routes.questions, questions_controller.questions);

/**
 * question routes
 */
app.get(routes.question, question_controller.question);

/**
 * manager routes
 */
app.get(routes.manager, manager_controller.managers);

/**
 * course routes
 */
app.get(routes.course, index_controller.course);

/**
 * error page
 */
app.use(function(req, res){
	res.redirect('/error');
});

/**
 * listen
 */
app.listen(app.get('port'), function(){
	logger.echo('question is running at localhost:' + app.get('port'));
});
