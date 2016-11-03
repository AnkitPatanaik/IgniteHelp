//my api key
var API_KEY = '12286b90480b8599e5a08ffbf87d0caf' //to hit The Movie Database API

//import packages
var http = require("https");
var Promise = require("bluebird");
var request =  require('request'); //Makes it easy for us to get or post to different urls
var rp = require('request-promise');
var express = require('express');
app = express();


//TODO -> first route
app.get('/movies', function (req, res) {
	var overview = getMovie("storks") 
		//console.log(req);
		console.log("The overview of the movie is: " + overview);
		res.send(overview);
})

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
	  	json: true };

		return rp(options) //return a promise
}

var x = getMovie("Storks"); //this is a promise

x.then(function(value) {  //handle results of promise
	console.log(value.results[0].overview)
  }, function(err) {
  	console.log(err);
});

//console.log("YO " + getMovie("Storks", test("ay it's me")));