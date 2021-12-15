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

  $("#toTop").on("click", function() {
    //html works for FFX
    //body works for Chrome
    $("html, body").animate({scrollTop: 0}, 0);
    $(".new-tweet").animate({
      height: "show"
    }, 600);
    $("#tweet-text").focus();
  });

  $(window).on("scroll", function() {
    if ($(this).scrollTop() - 200 > 0) {
      $(".double-arrow").fadeOut("fast");
      $('#toTop').stop().slideDown('fast'); // show the button
    } else {
      $(".double-arrow").fadeIn("fast");
      $('#toTop').stop().slideUp('fast'); // hide the button
    }
  });

});
