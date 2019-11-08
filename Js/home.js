console.log("ok");

window.onload = function() {
  fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=9901ee414425659325dc091c288e33c9&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    //console.log(respuesta.results[9]);

    var serie = respuesta.results;
    for (var i = 0; i < serie.length; i++) {
      document.querySelector(".puntuadas").innerHTML += "<div class='punt'><img src=http://image.tmdb.org/t/p/w200"+ serie[i].poster_path +"><h5>" + serie[i].name + "</h5><h6>"+serie[i].vote_average+"<ion-icon name='star'></ion-icon></h6></div>"
    }
  })
  .catch(function(error) {
    alert("Error, perdon, vuelva mas tarde")
  })


  fetch("https://api.themoviedb.org/3/tv/popular?api_key=9901ee414425659325dc091c288e33c9&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    console.log(respuesta.results[9]);

    var favs = respuesta.results;
    for (var i = 0; i < favs.length; i++) {
      document.querySelector(".favoritas").innerHTML += "<div class='punt'><a href=detalle.html?"+ favs[i].id +"><img src=http://image.tmdb.org/t/p/w200"+ favs[i].poster_path+"></a><h5>"+favs[i].name + "</h5><h6>"+favs[i].vote_average+"<ion-icon name='star'></ion-icon></h6></div>"
    }
  })


  .catch(function(error) {
    alert("Error, perdon, vuelva mas tarde")
  })

  fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=9901ee414425659325dc091c288e33c9&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    console.log(respuesta.results[9]);

    var aire = respuesta.results;
    for (var i = 0; i < aire.length; i++) {
      document.querySelector(".alaire").innerHTML += "<div class='punt'><img src=http://image.tmdb.org/t/p/w200"+ aire[i].poster_path+"><h5>"+aire[i].name + "</h5><h6>"+aire[i].vote_average+"<ion-icon name='star'></ion-icon></h6></div>"
    }
  })
  .catch(function(error) {
    alert("Error, perdon, vuelva mas tarde")
  })







  fetch("https://api.themoviedb.org/3/tv/latest?api_key=9901ee414425659325dc091c288e33c9&language=en-US")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    console.log(respuesta.results[9]);

    var elegida = respuesta.results;
    for (var i = 0; i < elegida.length; i++) {
      document.querySelector(".favseama").innerHTML += "<img src=http://image.tmdb.org/t/p/w200/" + elegida[i].backdrop_path + "><div class='textof'><h2>Serie de la semana</h2><h3>"+ elegida[i].name+"</h3> <div class='sem'><h4>"+ elegida[i].AÑO+"</h4><h5>"+ elegida[i].vote_average+"<ion-icon name='star'></ion-icon></h5></div></div>"
    }
  })
  .catch(function(error) {
    alert("Error, perdon, vuelva mas tarde")
})

}
