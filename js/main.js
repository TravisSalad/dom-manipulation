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
//create a function that when clicked, hides login input fields.
  $("#login").click(function(){
  $("#login, div.form-group").hide();
  $("#welcome").show();
//create a function that when logout button is clicked, shows login input fields.
  $("#logout").click(function(){
  $("#welcome").hide();
  $("#login, div.form-group").show();
  });
//display first name and last name after clicking login button.
  $("#name").text(userInfo.firstName + " " + userInfo.lastName);

});

//create function when view-details buttons are clicked.
 $(".view-details").on('click', function(event){
//create a variable associated with the button that is clicked.
   var targetElement = event.target;
//create a variable called container that is the target elements grandparent.
   var container = targetElement.parentElement.parentElement;
//within the container, find the details class.
   $(container).find('.details').each(function(index, el){
//if element is visible, fade out on click and change button inner html to say view details.
     if($(el).is(':visible')){
       $(el).fadeOut();
       targetElement.innerHTML = "View Details";
//if element is not visible, fade in and change the button's inner html to say hide details.
    }else{
       $(el).fadeIn();
       targetElement.innerHTML = "Hide Details";
     }
   });
 });

//create a function that counts votes
var updateBars = function(voteCounts){
  var greatBar = $('.great-progress');
  var greatestBar = $('.greatest-progress');
//set great width equal to the percent or # of clicks on great divided by number of total clicks, do the same for greatest
  var greatWidth = voteCounts.great / voteCounts.total;
  var greatestWidth = voteCounts.greatest / voteCounts.total;
//update great bar's width css to the percent of great votes.
  greatBar.css('width', greatWidth * 100 + '%');
//update greatest bar's width to the percent of greatest votes.
  greatestBar.css('width', greatestWidth * 100 + '%');
//display the percent of votes within each vote bar and round that number so there is no decimals
  greatBar.text("Total Great: " + Math.floor(greatWidth * 100) + '%');
  greatestBar.text("Total Greatest: " + Math.floor(greatestWidth * 100) + '%');
//add a total count below the count bars
  $("#vote-total").text("Total Votes: " + voteCounts.total);

}

//create a function that will be executed when button with class vote is clicked
$(".vote").on('click', function(event){
//create conditional, if  button with class great is clicked, add one vote to great and add one vote to total
  var button = $(event.target);
  if(button.data('vote') == 'great'){
    voteCounts.great += 1;
//create conditional if greatest is clicked add one to greatest and one to the total votes.
  }else if(button.data('vote') == 'greatest'){
    voteCounts.greatest += 1;
  }
    voteCounts.total += 1;
    updateBars(voteCounts);
//create an elert box that says thank you for your vote!
  var thanks = function(){
      alert("Thank you for your vote!");
  }
  setTimeout(thanks, 100);

});

});
