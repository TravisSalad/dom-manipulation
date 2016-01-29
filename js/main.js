//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
    // Place all your Javascript code inside this "document ready" function so
    // it does not run until the DOM is ready for Javascript manipulation.

    // TODO: Create a function to listen for clicks on the "login" button.
    //      1. When a user clicks the "login" button, hide the login
    //          form elements on the page.
    //      2. Fill the user's first and last name into `div.user-info`.
    //      (NOTE: You do not have to perform any validation on the data as
    //          a base requirement.)

  $("#login").click(function(){
  $("#login, div.form-group").hide();
  $("#welcome").show();

  $("#logout").click(function(){
  $("#welcome").hide();
  $("#login, div.form-group").show();
  });

  $("#name").text(userInfo.firstName + " " + userInfo.lastName);

});


    // TODO: Create a function to listen for clicks on all the "View Details"
    // buttons so that when a user clicks a "View Details" button they see
    // the content contained in the elements with the class "details" in the
    // proper part of the screen.
    //      1. When user clicks a "view details" button, find the parent of that element.
    //      2. Within that parent, find all the elements that have the class `details`.
    //      3. Toggle visibility of all the elements within that parent with the class `details`.
    //      4. Change the text of the "view details" button to read "hide details" so the user
    //          understands they can hide the text again.


 $(".view-details").on('click', function(event){
   var targetElement = event.target;
   var container = targetElement.parentElement.parentElement;
   $(container).find('.details').each(function(index, el){
     if($(el).is(':visible')){
       $(el).fadeOut();
       targetElement.innerHTML = "View Details";
     }else{
       $(el).fadeIn();
       targetElement.innerHTML = "Hide Details";
     }
   });
 });


    // TODO: Create a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
    //      1. Set up an event listener on the buttons with the `vote` class.
    //      2. When a button is clicked, look at the `data-vote` attribute to determine
    //          what the user is voting for ("great" or "greatest").
    //      3. Increment the counter for whichever vote talley is affected.
    //      4. Determine the respective percentages (out of 100) for each progress bar.
    //      5. Modify the `width` attribute on each progress bar to set the updated percentage.


    var updateBars = function(voteCounts){
      var greatBar = $('.great-progress');
      var greatestBar = $('.greatest-progress');
      var greatWidth = voteCounts.great / voteCounts.total;
      var greatestWidth = voteCounts.greatest / voteCounts.total;

      greatBar.css('width', greatWidth * 100 + '%');
      greatestBar.css('width', greatestWidth * 100 + '%');

      greatBar.text("Total Great: " + Math.floor(greatWidth * 100) + '%');
      greatestBar.text("Total Greatest: " + Math.floor(greatestWidth * 100) + '%');
      $("#vote-total").text("Total Votes: " + voteCounts.total);
    }

//create a function that will be executed when button with class vote is clicked
$(".vote").on('click', function(event){
  //create conditional, if  button with class great is clicked, add one vote to great and add one vote to total
  var button = $(event.target);
  if(button.data('vote') == 'great'){
    voteCounts.great += 1;
  }else if(button.data('vote') == 'greatest'){
    voteCounts.greatest += 1;
  }
    voteCounts.total += 1;
    updateBars(voteCounts);

  var thanks = function(){
      alert("Thank you for your vote!");
  }
  setTimeout(thanks, 100);
});




  //create variable great percent and greatest percent which divides great and greatest votes by total, multiplies by 100 and adds %
  // var greatPercent =  (Math.round((voteCounts.great / voteCounts.total)*100)) + "%";
  // var greatestPercent =  (Math.round((voteCounts.greatest / voteCounts.total)*100)) + "%";

  //update great and greatest progress bar with the percent width based on the percent of votes calculated above.
  // $(".great-progress").width(greatPercent);
  // $(".greatest-progress").width(greatestPercent);

  //

});
