var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/',index);

/**
* index
*/
function index(req, res) {
	res.send('hello world !');
}

app.listen(3000);
