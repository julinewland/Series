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


  var form = document.querySelector('.avanzado');

  form.onsubmit = function (e) {

    e.preventDefault()

    var generoValue = document.querySelector('.genero').options[document.querySelector('.genero').selectedIndex].value;

    var generoEValue = document.querySelector('.genero-excluido').options[document.querySelector('.genero-excluido').selectedIndex].value;


    if(generoValue == generoEValue){
      alert('EEE')
    }
  }

})
