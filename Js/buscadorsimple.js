window.onload = function(){

  var query = new URLSearchParams(location.search);

  var loBuscado = query.get('buscador')

  // console.log(loBuscado);
  fetch("https://api.themoviedb.org/3/search/tv?api_key=9901ee414425659325dc091c288e33c9&language=en-US&query="+loBuscado+"&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    console.log(respuesta);

    var serie = respuesta.results;
    console.log(serie);

    if (serie.length == 0){
      document.querySelector(".total").innerHTML += "<h2> No se han encontrado resultados para '" + loBuscado + "', por favor intenta denuevo.</h3>"
    }
    else{
      document.querySelector(".resultado").innerHTML += "<h2>Resultado de '"+ loBuscado +"':</h2>"
      for (var i = 0; i < serie.length; i++) {
        if(serie[i].vote_average != 0 && serie[i].poster_path != null){
        document.querySelector(".total").innerHTML += "<div class='punt'><a href=detalle.html?id="+ serie[i].id +"><img src=http://image.tmdb.org/t/p/w200"+ serie[i].poster_path+"></a><h5>"+serie[i].name + "</h5><h6>"+serie[i].vote_average+"<ion-icon name='star'></ion-icon></h6></div>"
        }
      }
    }
    })


  .catch(function(error) {
    console.log(error)
  })




}
