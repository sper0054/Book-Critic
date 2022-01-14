
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











      

// user input array
var search = {};

