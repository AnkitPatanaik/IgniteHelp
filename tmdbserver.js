var TmdbApi = require('tmdb-node')
var api = new TmdbApi('12286b90480b8599e5a08ffbf87d0caf') //Will throw an error if a key isn't supplied

// var API_KEY = '12286b90480b8599e5a08ffbf87d0caf'

// var http = require("https");
// var request = require('request'); //Makes it easy for us to get or post to different urls

var express = require('express')
app = express();


app.get('/genres', function (req, res) {
	//the parameters for genre is a function that has two parameters,
	//the first, return err if there is an error
	//the second, data, the response of a successful request
	api.genres(function(err,data){ 
	    console.log(data.genres[1].name); //parse json object to get name of a genre
	    res.send(data.genres[1].name) //send the genre to html
	});
})

// app.get('/movies', function (req, res) {
// 	var overview = getMovie("storks")
// 	console.log("The overview of the movie is: " + overview);
// 	res.send(overview);
// })

//home page
app.get('/', function (req, res) {
  res.send('Hello World!');
  res.send(success);
});

//server is running
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//gets movie name through a parameter and appends it to the query string
// function getMovie(movie) {
// 	var options = { method: 'GET',
// 	  url: 'https://api.themoviedb.org/3/search/movie',
// 	  qs: 
// 	   { query: movie,
// 	     language: 'en-US',
// 	     api_key: API_KEY},
// 	  headers: { 'content-type': 'application/json' },
// 	  body: {},
// 	  json: true };

// 	  request(options, function (error, response, body) {
// 		  if (error) throw new Error(error);
// 		  //body returns ALL results --> check it out by uncommenting below
// 		  //console.log(body);
		  
// 		  //i just want the first one
// 		  console.log(body.results[0].overview);
// 		  return body.results[0].overview;
// 		});
// }

