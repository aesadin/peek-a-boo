$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });

  $(".clickable-dog").click(function() {
    $("#dog-hide").fadeToggle();
    $("#dog-show").fadeToggle();
  });
});