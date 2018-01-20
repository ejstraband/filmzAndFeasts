
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
	var queryURL = "https://api.themoviedb.org/3/movie/550?api_key=c70bfaf171d59d60de7697bf10d02675&query=" + search;

$.ajax({
	url: queryURL,
	method: "GET"
}).done(function(response){

	var rating = results.rating;
	var genre = results.genres.name;
	var releaseYear = results.release_date;
	var trailer = results.video;
	var poster = poster_path;

	database.ref().push({
	    rating: rating,
	    genre: genre,
	    releaseYear: releaseYear,
	    trailer: trailer
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

// search functions
// got a lot of help from https://www.tutorialspoint.com/firebase/firebase_queries.htm

// Test Variables
  // successful (movie IN the d.b.)
  // searchFlick = "Mud";

  // fail (movie NOT IN the d.b.)
  // searchFlick = "Legend";

// Search for the movie in the events part of the database
var searchFlick = "";

function searchForFlick() {
  searchFlickRef = database.ref("movies/");
  eventRef = database.ref("events/");
  searchFlickRef.orderByChild("movie").equalTo(searchFlick).on("value", function(searchResult) {
    // pumps out the matched movie to the console

    // a.m. help from Brian
    eventRef.orderByChild("movie").equalTo(searchFlick).on("value", function(event) {
      console.log(event.val());
      console.log(searchResult.val().movie);
    })
  });
}

// console.log an event record
var searchEvent = "";

function displayEvent() {

  var eventRef = database.ref("events/");
  // searchEventRef.orderByChild("event").equalTo(searchEvent).on("child_added", function(searchResult) {
  eventRef.orderByKey().on("child_added", function(snapshot) {
  console.log(snapshot.key);
  });
}

// add event function
var date;
var host;
var movie;
var notes;

// testing variables
// date = "1/1/3001";
// host = "chuck";
// movie = "howard the duck";
// notes = "console invoked";

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