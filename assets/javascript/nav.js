$(document).ready(function() {

// console.log('JOY!');

function hideAllDiv(){
$('#statzPage, #listPage, #last4Page, #calendarPage, #memebersPage, #last4TrailerPage, #landingPage').each(function() {
	$(this).hide();
});
}
hideAllDiv();

$('.nav-link').on('click', function() {
    $('#statzPage').hide();
        $('#statzPage').show('slow');
    });
});



