//define functions here
$('h1').on("eventname", function(){
    //action you want taken
});

$("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
  alert("you entered the wrong value");
  return;
});

function getIt() {
  $('p').on('click', function(){
    alert('Hey!');
    return;
  });
}

$(document).ready(function(){

// call functions here

});
