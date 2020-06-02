$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });

  $(".clickable-dog").click(function() {
    $("#dog-hide").toggle();
    $("#dog-show").toggle();
  });
});