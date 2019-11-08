window.onload = function() {
  fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=9901ee414425659325dc091c288e33c9&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })
