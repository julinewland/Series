
window.addEventListener("load", function() {
  console.log("OK");
  var idGenero = new URLSearchParams(location.search).get("id");
  fetch("https://api.themoviedb.org/3/tv/" + idGenero + "?api_key=9901ee414425659325dc091c288e33c9&language=Es")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    console.log(respuesta);

    var nombre = respuesta.name;
    var anio = respuesta.first_air_date;
    var poster = respuesta.poster_path;
    var generos = respuesta.genres[0].name;
    var generoId = respuesta.genres[0].id;
    var estrellas = respuesta.vote_average;
    var lenguajeOriginal = respuesta.original_language;
    var sinopsis = respuesta.overview;

    if (lenguajeOriginal == "en"){
      lenguajeOriginal = "Ingles"
    }
    else {
      lenguajeOriginal= lenguajeOriginal
    }

    if (lenguajeOriginal == "fr"){
      lenguajeOriginal = "Francés"
    }
    else {
      lenguajeOriginal= lenguajeOriginal
    }
    if (lenguajeOriginal == "ja"){
      lenguajeOriginal = "Japonés"
    }
    else {
      lenguajeOriginal= lenguajeOriginal
    }
    if (lenguajeOriginal == "es"){
      lenguajeOriginal = "Español"
    }
    else {
      lenguajeOriginal= lenguajeOriginal
    }
    if (lenguajeOriginal == "pt"){
      lenguajeOriginal = "Portugués"
    }
    else {
      lenguajeOriginal= lenguajeOriginal
    }
    if (lenguajeOriginal == "it"){
      lenguajeOriginal = "Italiano"
    }
    else {
      lenguajeOriginal= lenguajeOriginal
    }
    if (lenguajeOriginal == "ko"){
      lenguajeOriginal = "Koreano"
    }
    else {
      lenguajeOriginal= lenguajeOriginal
    }


    var total = document.querySelector("div.total");
    total.innerHTML += `<div class="total"><div class="imagen"><img src="http://image.tmdb.org/t/p/w200/`+ poster + `" alt=""></div><div class="detalle"><div class="display">
    <h2>`+nombre +`</h2><h4>`+estrellas+`<ion-icon name="star"></ion-icon></h4></div>
    <h3>`+ anio +`</h3><h6>Genero: <a href=ungenero.html?id=`+ generoId +`>`+generos+`</a></h6><h6 class="">Lenguaje original: `+ lenguajeOriginal +`</h6>
    <p>`+ sinopsis +`</p></div></div>`
})
  console.log("OK");
  var idGenero = new URLSearchParams(location.search).get("id");
  fetch("https://api.themoviedb.org/3/tv/"+ idGenero +"/recommendations?api_key=9901ee414425659325dc091c288e33c9&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    console.log(respuesta);

var reco = respuesta.results;
console.log(reco);


for (var i = 0; i <5; i++) {

  document.querySelector(".rr1").innerHTML += "<div class='punt'><a href=detalle.html?id="+ reco[i].id +"><img src=http://image.tmdb.org/t/p/w200"+ reco[i].poster_path+"></a><h5>"+reco[i].name + "</h5><h6>"+reco[i].vote_average+"<ion-icon name='star'></ion-icon></h6></div>"
}


  })


  .catch(function(error) {
    alert("Error, perdon, vuelva mas tarde")
  })

  fetch("https://api.themoviedb.org/3/tv/"+ idGenero +"/videos?api_key=9901ee414425659325dc091c288e33c9&language=en-US")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    var trailer = respuesta.results[0]
    console.log(trailer);
    var video = trailer.key
    if (video != null) {

      document.querySelector(".trailer").innerHTML += "<h4>Ver trailer</h4>"

      document.querySelector(".referencia").innerHTML += "<iframe width='233' height='' src='https://www.youtube.com/embed/" + video + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    }else{

    }


  })

  .catch(function(error) {
    alert("Error, perdon, vuelva mas tarde")
  })



var modal = document.querySelector(".modal")
var cerrar = document.querySelector(".close")
var abrir = document.querySelector(".trailer")
var flex = document.querySelector(".flex")


abrir.addEventListener("click", function(){
  modal.style.display = "block";
});

cerrar.addEventListener("click", function(){
  modal.style.display = "none";
})

window.addEventListener("click", function(e){
  if (e.target == flex){
    modal.style.display = "none";
  }
})

var verRecomendaciones = document.querySelector(".recon")

var recomendadas = document.querySelector(".rr1")


if (display = "none") {
  verRecomendaciones.onclick = function () {
     recomendadas.style.display = "flex";
 }
}
else {
  verRecomendaciones.onclick = function () {
    recomendadas.style.display = "none";
  }
}
})
