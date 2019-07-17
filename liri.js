require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var userInput = process.argv;
var artist = "";
var song = "";
var movie = "";

switch (userInput[2]) {
    case "concert-this":
        concerts();
        break;
    case "spotify-this-song":
        spotifyThis();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        // spotify();
        break
}


// concert function 
function concerts() {
for (var i = 3; i < userInput.length; i++) {
    if (i > 3 && i < userInput.length) {
        artist = artist + "+" + userInput[i];
    } else {
        artist += userInput[i];
    }
} 
// concerts 
var concertUrl = ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp");
console.log(concertUrl);


axios.get(concertUrl).then(
    function (response) {
        console.log(response.data);
    })
};


// function concerts() {
//     this.venue = venue;
//     this.location = location;
//     this.date = function() {
//         console.log(moment().format("mm dd yyyy"));
// }
// }


//spotify function 
function spotifyThis() {
    for (var i = 3; i < userInput.length; i++) {
        if (i > 3 && i < userInput.length) {
            song = song + "+" + userInput[i];
        } else {
            song += userInput[i];
        }
    } 

spotify.search({ type: 'track', query: song, limit: 1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log(data.tracks.items[0].artists[0].name)
    console.log(data.tracks.items[0].name)
}) 
}

// movie search
function movieThis() {
    for (var i = 3; i < userInput.length; i++) {
        if (i > 3 && i < userInput.length) {
            movie = movie + "+" + userInput[i];
        } else {
            movie += userInput[i];
        }
    } 

axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
      console.log("The movie's title is: " + response.data.Title);
      console.log("The movie's year release is: " + response.data.Year);
      console.log("The movie's actors is: " + response.data.Actors);
      console.log("The movie's plot is: " + response.data.Plot);
      console.log("The movie's language is: " + response.data.Language);
      console.log("The movie's country is: " + response.data.Country);
    console.log("The movie's rating is: " + response.data.imdbRating);
  })
};

//make default movie mr. nobody

//spotify this song making use of the 'fs' nonde package.  




