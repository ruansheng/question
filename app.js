var express = require('express');

var app = express();
var hbs = require('hbs');

app.use(express.static('public'));
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/',index);

/**
* index
*/
function index(req, res) {
	//res.send('hello world !');
	res.render('index',{'title':'question'});
}

app.listen(3000);
