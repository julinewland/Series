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
    for (var i = 0; i < serie.length; i++) {
      document.querySelector(".total").innerHTML += "<div class='punt'><a href=detalle.html?id="+ serie[i].id +"><img src=http://image.tmdb.org/t/p/w200"+ serie[i].poster_path+"></a><h5>"+serie[i].name + "</h5><h6>"+serie[i].vote_average+"<ion-icon name='star'></ion-icon></h6></div>"
    }


    })


  .catch(function(error) {
    console.log(error)
  })



}
