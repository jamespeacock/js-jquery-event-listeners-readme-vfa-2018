//define functions here
function getIt() {
  $('p').on('click', function(){
    alert('Hey!');
    return;
  });
}

function frameIt() {
  $('img:first').on('load', function(){
    $('img:first').addclass('tasty');
    return;
  });
}

function pressIt() {
  $("#typing").on('keydown', function(e){
    if (e.which === 71) {
      alert('You pressed the G key!');
      return;
    }
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
    return;
  });
}


$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();

});
