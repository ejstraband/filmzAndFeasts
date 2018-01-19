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

  database = firebase.database();

// search function

// add function