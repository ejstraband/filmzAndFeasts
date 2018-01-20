
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

}