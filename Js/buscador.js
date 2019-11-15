window.addEventListener('load', function() {


  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=9901ee414425659325dc091c288e33c9&language=en-US")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    console.log(respuesta.genres);
    var genero = respuesta.genres;
    var selectGeneros = document.querySelector("select[name='genero']");
    console.log(selectGeneros);
    for (var i = 0; i < genero.length; i++) {
      selectGeneros.innerHTML += "<option value='" + genero[i].id + "'>" + genero[i].name + "</option>"
      document.querySelector("select[name='gen-e']").innerHTML += "<option value='"+genero[i].id+"'>"+ genero[i].name +"</option>"
    }
})

})
