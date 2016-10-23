var express = require('express');
var nodemovie = require('node-movie');
var app = express();

var success = function () {
	console.log('success');
};
var error = function () {
	console.log('ERROR');
};


app.get('/', function (req, res) {
  res.send('Hello World!');
  res.send(success);
});

app.get('/test', function (req, res) {
	var q = nodemovie('fury', function (err, data) {
    	console.log(data);
    	//return data;
	});
	//res.send(q);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


 