/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const createTweetElement = (tweetData) => {
    const $tweet = `<article class="tweet">
    <header>
    <div class="tweet-author">
    <div>
    <img src="${tweetData.user.avatars}" alt="tweet-author-icon">
    <span class="tweet-author-name">${tweetData.user.name}</span>
    </div>
    <span class="tweet-author-handle">${tweetData.user.handle}</span>
    </div>
    <p class="tweet-text">${tweetData.content.text}</p>
    </header>
    <footer>
    <span>${timeago.format(tweetData.created_at)}</span>
    <div class="tweet-icons">
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i>
    </div>
    </footer>
    </article>`;
    return $tweet;
  };

  const loadTweets = () => {
    $.ajax(' http://localhost:8080/tweets', { method: 'GET' })
      .then(tweets => renderTweets(tweets));
  };
  
  const renderTweets = (tweets) => {
    $('.all-tweets').html('');
    tweets.reverse();
    for (let tweet of tweets) {
      let newTweet = createTweetElement(tweet);
      $('.all-tweets').append(newTweet);
    }
  };
  


  $(".tweet-form").on("submit", function(e) {
    e.preventDefault();
    const formData = $(this).serialize();
    const validData = formData.slice(5);
    const regex = /%20/g;
    const isEmptyString = validData.replace(regex, "") === "";
  
    if (!validData || isEmptyString) {
      alert("Tweet cannot be empty!");
      return;
    }
  
    if (validData.length > 140) {
      alert("Tweet is too long!");
      return;
    }
  
    $.ajax('/tweets', { method: 'POST', data: formData })
      .then(loadTweets);
  
  });

  loadTweets();
});

