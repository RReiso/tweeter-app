$(document).ready(function() {
  $(".tweet-form").on("submit", function(e) {
    e.preventDefault();
    let formData = $(this).serialize();
    $.ajax('/tweets', { method: 'POST', data: formData });
  });
});
