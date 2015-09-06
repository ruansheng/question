var express = require('express');

var app = express();
var hbs = require('hbs');

app.use(express.static('public'));
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/',index);

/**
* login filter
*/
app.use(function(req,res,next){
	console.log('filter');
	next();
});

/**
* index
*/
function index(req, res) {
	res.render('index',{'title':'question'});
}

app.listen(3000);
