$(document).ready(function() {
  let counter = 140;
  $("#tweet-text").on("keyup", function(e) {
    // $(".counter").text(counter--);
    console.log($(this).val().length);
    const textLength = $(this).val().length;
    $(this).parent().siblings(".tweet-submit").children(".counter").text(140 - textLength);
  });
});
