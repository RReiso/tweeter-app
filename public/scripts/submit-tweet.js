$(document).ready(function() {
  $(".tweet-form").on("submit", function(e) {
    e.preventDefault();
    const formData = $(this).serialize();
    // console.log(formData);
    const validData = formData.slice(5);
    const regex = /%20/g;
    const isEmptyString = validData.replace(regex, "") === "";
    // console.log(isEmptyString);

    if (!validData || isEmptyString) {
      alert("Tweet cannot be empty!");
      return;
    }

    if (validData.length > 140) {
      alert("Tweet is too long!");
      return;
    }

    $.ajax('/tweets', { method: 'POST', data: formData });
  });
});
