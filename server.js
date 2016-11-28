//my api key
const API_KEY = '12286b90480b8599e5a08ffbf87d0caf' //to hit The Movie Database API

//import packages
var http = require("https");
var request =  require('request'); //Makes it easy for us to get or post to different urls
var rp = require('request-promise');
var express = require('express');
var bodyparser = require('body-parser');
app = express();

var workingDir = 'C:/Users/Ankit/Documents/GitHub/IgniteHelp';
//This sets bodyParser to act as middleware and go over all requests sent to your server
app.use(bodyparser.json());

/*  a promise pretty much tells node.js to not panic that the data 
	is not there it PROMISES it will come eventually */
app.get('/movies', function (req, res) {
	//getMovie returns a promise
	getMovie("storks").then(function(value) {  //handle results of promise
		res.send(value.results[0].overview) //send that to the html page to render
	  }, function(err) {
	  	console.log(err);
	});
});

app.get('/test', function (req, res) {
	res.sendFile(workingDir + '/views/movie.html');
});

//home page
app.get('/', function (req, res) {
	res.send('This is the home page, you made it!');
});

//server is running
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//gets movie name through a parameter and appends it to the query string
function getMovie(movie) {
	var options = { 
	    method: 'GET',
	  	url: 'https://api.themoviedb.org/3/search/movie',
	  	qs: 
	   		{ 
	   		query: movie,
	     	language: 'en-US',
	     	api_key: API_KEY},
	  		headers: { 'content-type': 'application/json', 'User-Agent': 'Request-Promise'
	  		},
	  	body: {},
	  	json: true 
	};
	return rp(options) //return a promise
}

//little chunk of code i was messing with to get the promise to work

/*
var x = getMovie("Storks"); //this is a promise
x.then(function(value) {  //handle results of promise
	console.log(value.results[0].overview)
  }, function(err) {
  	console.log(err);
});
*/