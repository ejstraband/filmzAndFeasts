// $(document).ready(function() {

// // console.log('JOY!');

// function hideAllDiv(){
// $('#statzPage, #listPage, #last4Page, #calendarPage, #memebersPage, #last4TrailerPage, #landingPage').each(function() {
// 	$(this).hide();
// });
// }

// Make only the landing page show up.
// hideAllDiv();
// $('#landingPage').show();
// });


// $(document).ready(function() {

// console.log('joy!');

// create a function to hide all divs
function hideAllDiv(){
$('#statzPage, #listPage, #last4Page, #calendarPage, #membersPage, #last4TrailerPage, #landingPage, #addPage').each(function() {
	$(this).hide();
});
}
// // Make only the landing page show up.

// // When a link is clicked, hide the currently visible page and display the clicked pg

hideAllDiv();
$('#landingPage').show();
// });

$(document).on("click", '.nav-link', function() {
   hideAllDiv();
   var pageId = $(this).data().page;
   console.log(pageId);
   $(pageId).show();
});

// $("#listPage").click(function() {
//     hideAllDiv();
//    $("#listPage").show();
// });

// $("#last4Page").click(function() {
//     hideAllDiv();
//    $("#last4Page").show();

// });

// $("#membersPage").click(function() {
//    hideAllDiv();
//    $("#membersPage").show();
// });

// $("#calendarPage").click(function() {
//     hideAllDiv();
//    $("#calendarPage").show();
// });

// $("#addPage").click(function() {
//     hideAllDiv();
//    $("#addPage").show();
// });


// click event for button when user clicks it to remove/add movie from the list


// replace alert with modal.. confirmation modal tha appears when user select movie that is not available in the db

 // $("#myModal").on("show", function() {    
 //   $("#myModal a.btn").on("click", function(e) {
 //      console.log("hellojoy");   
 //      // dismiss the dialog
 //      $("#myModal").modal('hide');     
 //        });
 //    });
 // // remove event listener when after dismiss the dialog
 //    $("#myModal").on("hide", function() {    
 //        $("#myModal a.btn").off("click");
 //    });
 //    // function to remove element from the dom when modal hidden
 //    $("#myModal").on("hidden", function() {  
 //        $("#myModal").remove();
 //    });
    
 //    // the actual modal functionality and show the dialog
 //    $("#myModal").modal({                    
 //      "backdrop"  : "static",
 //      "keyboard"  : true,
 //      "show"      : true                    
 //    });

