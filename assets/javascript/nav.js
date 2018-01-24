$(document).ready(function() {

// console.log('JOY!');

function hideAllDiv(){
$('#statzPage, #listPage, #last4Page, #calendarPage, #memebersPage, #last4TrailerPage, #landingPage').each(function() {
	$(this).hide();
});
}

// Make only the landing page show up.
hideAllDiv();
$('#landingPage').show();
});


