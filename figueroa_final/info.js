

$(document).ready(function() {
  $(".track img").mouseenter(function() {
    var info = $(this).data("info"); 
    $(".info-text").text(info);       
  });
  $(".track img").mouseleave(function() {
    $(".info-text").text(""); 
  });
});