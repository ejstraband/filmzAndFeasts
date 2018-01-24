
  // Firebase Config

// move this into the HTML
// <script src="https://www.gstatic.com/firebasejs/4.8.2/firebase.js"></script>
// <script>

// starter Variables for the UI Form
var newMovie;
var currentDate;
var host = ["Cathy", "Eric", "Angie", "Rick", "Jackson", "Caroline", "Jill", "Chad"];


// Initialize Firebase
 var config = {
  apiKey: "AIzaSyAWficuLo5fXsnKYUaF13DtDAulrtv9DPU",
  authDomain: "filmzandfeasts.firebaseapp.com",
  databaseURL: "https://filmzandfeasts.firebaseio.com",
  projectId: "filmzandfeasts",
  storageBucket: "filmzandfeasts.appspot.com",
  messagingSenderId: "168990079713"
};

    firebase.initializeApp(config);

    var database = firebase.database();



function addMovie() {

	var movie = $(this).attr("placeholder");
	var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=c70bfaf171d59d60de7697bf10d02675&query=" + "%22" + search + "%22" + "&page=1&include_adult=false";
  console.log(queryURL);

$.ajax({
  "async": true,
  "crossDomain": true,
	"url": queryURL,
	"method": "GET",
  "headers": {},
  "data": "{}"
  }).done(function(response){

  console.log(response);
	// var rating = response.rating;
 //  console.log(rating);
	var genre = response.genres;
  console.log("genre is" + genre);
	var releaseYear = response.release_date;
  console.log("release year is" + releaseYear);
	// var trailer = response.video;
 //  console.log(trailer);
	var poster = response.poster_path;
  console.log(poster);

	database.ref().push({
	    // rating: rating,
	    genre: genre,
	    releaseYear: releaseYear,
	    // trailer: trailer,
	    poster: poster
	});

	database.ref().on("child_added", function(childSnapshot, prevChildKey) {

	  console.log(childSnapshot.val());

	  var rating = childSnapshot.val().rating;
	  var genre = childSnapshot.val().genre;
    var releaseYear = childSnapshot.val().releaseYear;
	  var trailer = childSnapshot.val().trailer;
    var poster = childSnapshot.val().poster;

		console.log(rating);
		console.log(genre);
		console.log(releaseYear);
		console.log(trailer);
		console.log(poster);
  });

});

}


// search functions
// got a lot of help from https://www.tutorialspoint.com/firebase/firebase_queries.htm

// Test Variables
  // successful (movie IN the d.b.)
  // searchFlick = "Mud";

  // fail (movie NOT IN the d.b.)
  // searchFlick = "Legend";

var matchedTitle = undefined;
var watchedDate = undefined;
var matchedHost = undefined;
var referenceNotes = undefined;
// Search for the movie in the events part of the database
var searchFlick = "Team America: World Police";

function searchForFlick() {
  searchFlickRef = database.ref("events/");

  console.log(searchFlickRef.orderByChild("movie").equalTo(searchFlick).toJSON());

  searchFlickRef.orderByChild("movie").equalTo(searchFlick).on("child_added", function(searchResult) {
  // pumps out the matched movie to the console
  databaseSearchResult = searchResult.val().movie;
      console.log("movie search: " + databaseSearchResult);
      console.log("Movie Matched");
      console.log("Event search running");
      // Search for an event with the movie watched
      // function searchForEvent() {
      searchEventRef = database.ref("events/");
      searchEventRef.orderByChild("movie").equalTo(searchFlick).on("child_added", function(searchResult) {
      // logs out the matched event details to the console
        console.log("Event Details");
        matchedTitle = searchResult.val().movie;
        console.log("Title: " + matchedTitle);
        watchedDate = searchResult.val().date;
        console.log("Watched Date: " + watchedDate);
        matchedHost = searchResult.val().host
        console.log("Host: " + matchedHost);
        referenceNotes = searchResult.val().notes;
        console.log("Notes: " + referenceNotes);
        alertFunction();
      });
  });
}

function alertFunction() {
  if (matchedTitle === undefined) {
  alert("new movie");
} else {
  alert("movie matched");
  }
}

searchForFlick();


// add event function
var date;
var host;
var movie;
var notes;

function addEvent() {
database.ref().child('events').push({
  date: date,
  host: host,
  movie: movie,
  notes: notes
  });
}

// Eric's add movie. Delete if not needed
// function addMovie() {
// database.ref().child('movies').push({
//   genre: genre,
//   movie: movie,
//   notes: notes,
//   poster: poster,
//   rating: rating,
//   synopsis: synopsis
//   });
// }