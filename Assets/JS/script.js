
//variables to store api keys
var bookAPI= "D9OwWTZWlrbbFIzrqzKyzY9zxhC4MVua"
var tubeAPI= "AIzaSyBSpft2lGGm4UmvupTZwpBsVuamB3inYA0"


//books api start
//source: https://developer.nytimes.com/docs/books-product/1/routes/lists/overview.json/get
var getBooksList = function(books) {
    //overview endpoint will list Top 5 books for all Best Sellers lists
    var apiUrl = "https://api.nytimes.com/svc/books/v3/lists/overview.json";
    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);
            displayBooks(data, books);
          });
        } else {
          alert("Error: " + response.statusText);
        }
      })
      .catch(function(error) {
        alert("Unable to connect to NY Times");
      });
};



//youtube api start
//source: https://developers.google.com/youtube/iframe_api_reference?hl=en_US
// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        playerVars: {
            'playsinline': 1
        },
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
        });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
event.target.playVideo();
}

// user input array
var search = {};

