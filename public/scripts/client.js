/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  const renderTweets = (tweets) => {
    for (let tweet of tweets) {
      let newTweet = createTweetElement(tweet);
      $('.all-tweets').append(newTweet);
    }
  };

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


  renderTweets(data);
  
});
