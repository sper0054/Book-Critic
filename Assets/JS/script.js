// defining variables
var bookList = document.querySelector('ul');
var fetchButton = document.getElementById('bestsellerbtn');

// API Key
var bookAPI= "D9OwWTZWlrbbFIzrqzKyzY9zxhC4MVua"


function getApi() {
  var requestUrl = "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=" + bookAPI;
  fetch(requestUrl)
  .then(function(response) {
    console.log (response)
    return response.json();
  })
  .then(function(data) {
    console.log (data)
    for (var i = 0; i < 5; i++) {
     var listItem = document.createElement('li');
      listItem.textContent = data.results.lists[0].books[i].title;
      bookList.appendChild(listItem);

      var author = document.createElement('p');
      author.textContent = data.results.lists[0].books[i].author;
      listItem.appendChild(author);
    }
  });
};


fetchButton.addEventListener('click', getApi);