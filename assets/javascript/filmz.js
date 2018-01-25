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


$("#add-btn").on("click", function(event) {
    // event.preventDefault();
    addTheMovie = $("#movieTitle").val().trim();
    console.log(addTheMovie);
    addMovie();
});

function addMovie() {

	// var movie = $(this).attr("placeholder");
	var queryURL = "http://www.omdbapi.com/?t=" + addTheMovie + "&apikey=30d5e4a1";
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
	var rated = response.Rated;
  console.log("This movie is rated " + rated);
	var genre = response.Genre;
  console.log("The genre is " + genre);
	var releaseYear = response.Year;
  console.log("The release year is " + releaseYear);
	var plot = response.Plot;
  console.log("The plot is " + plot);
	var poster = response.Poster;
  console.log(poster);
  var host = document.getElementById("host").value;
  console.log(host);
  var date = document.getElementById("movieDate").value;
  console.log(date);

	database.ref().child('events').push({
	    rated: rated,
	    genre: genre,
	    releaseYear: releaseYear,
	    plot: plot,
	    poster: poster,
      host: host,
      date: date


	});

	database.ref().on("child_added", function(childSnapshot, prevChildKey) {

	  console.log(childSnapshot.val());

	  var rating = childSnapshot.val().rated;
	  var genre = childSnapshot.val().genre;
    var releaseYear = childSnapshot.val().releaseYear;
	  var plot = childSnapshot.val().plot;
    var poster = childSnapshot.val().poster;

		console.log(rated);
		console.log(genre);
		console.log(releaseYear);
		console.log(plot);
		console.log(poster);
  });

});

}

// Modal Alert Code

// <!--MoDAL ALERT FOR MOVIE NOT FOUND.-->
  function movieNotFoundModal() {
  $(document).ready(function(){
  $(".missing-movie-modal").html("<p>"+ " Looks like a new one!");
  $('#movieMissingModal').modal();
});
}

// <!--MoDAL ALERT FOR MOVIE FOUND.-->
  function movieFoundModal() {
  $(document).ready(function(){
  $(".found-movie-modal").html("<p>"+ "Movie already watched .. please try again.");
  $('#movieFoundModal').modal();
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
// var searchFlicks;

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
      });
  });
    alertFunction();
}

function alertFunction() {
  if (matchedTitle) {
  // alert("new movie");
  movieNotFoundModal();
} else {
  movieFoundModal();
  }
}

// search for a flick
$("#search-btn").on("click", function(event) {
    event.preventDefault();
    searchFlick = $("#list-movie-selection").val().trim();
    console.log(searchFlick);
    searchForFlick();
});

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