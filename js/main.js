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

  $("#login").click(function(){
  $("#login, div.form-group").hide();
  $("#welcome").show();

  $("#logout").click(function(){
  $("#welcome").hide();
  $("#login, div.form-group").show();
  });

  $("#name").text(userInfo.firstName + " " + userInfo.lastName);

});


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

});
