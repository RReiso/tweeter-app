$(document).ready(function() {
  $("#tweet-text").on("keyup", function(e) {
    const $textLength = $(this).val().length;
    const $remainingChars = 140 - $textLength;
    const $counter = $(this).parent().siblings(".tweet-submit").children(".counter");
    $counter.text($remainingChars);
    $remainingChars < 0 ?  $counter.addClass("red") : $counter.removeClass("red");
  });

  $(".error").on("click", function(e) {
    $(this).fadeOut("fast");
  });

  const arrowMove = () => {
    $("#slider").animate({height: "toggle"}, {
      duration: 800,
      easing: 'swing',
      complete: arrowMove
    });
  };
  arrowMove();

  $(".double-arrow").on("click", function() {
    $(".new-tweet").animate({
      height: "toggle"
    }, 600);
  });

});
