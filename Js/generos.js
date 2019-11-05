console.log("ok");

window.onload = function() {
  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=9901ee414425659325dc091c288e33c9&language=en-US")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    console.log(respuesta.genres);

    var genero = respuesta.genres;
    for (var i = 0; i < genero.length; i++) {
      document.querySelector(".generos").innerHTML += "<div class='genero'><h3>"+ genero[i].name +"</h3><div>"}
  })


}
