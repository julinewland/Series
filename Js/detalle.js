
window.addEventListener("load", function() {
  var numeroPagina = 1
  console.log("OK");
  var idSerie = new URLSearchParams(location.search).get("id");
  fetch("https://api.themoviedb.org/3/tv/" + idSerie + "?api_key=9901ee414425659325dc091c288e33c9&language=Es&page="+ numeroPagina)
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
    <h3>`+ anio +`</h3><h6>Genero: <a href=ungenero.html?id=`+ generoId + "&tituloGenero=" + generos +`>`+generos+`</a></h6><h6 class="">Lenguaje original: `+ lenguajeOriginal +`</h6>
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
    console.log("error");
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
    console.log(error);
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

var verRecomendaciones = document.querySelector("h2.recon")
var recomendadas = document.querySelector(".rr1")

verRecomendaciones.addEventListener('click', function() {
  if (recomendadas.style.display == "none") {
    recomendadas.style.display = "flex"
  }
  else {
    recomendadas.style.display = "none"
  }
})



var buscar = document.querySelector(".buscadors") //ESTO ES el formT
var buscado = document.querySelector(".white") //ESTO ES EL INPUT PARA ESCRIBIR

function minimoTres(){
alert("introducí al menos 3 caracteres")
}

buscar.onsubmit = function(event){
  if(buscado.value.length < 3) {
    event.preventDefault();
    $.notify("Introducí por lo menos tres caracteres", {autoHideDelay: 3000});
  }
}





//Paso 1: Leo Storage
var recuperoStorage = localStorage.getItem("seriesFavoritas");


// Si todavía no tenía series favoritos
if (recuperoStorage == null) {
// crear una lista vacia

var seriesFavoritas = [];
} else {
// Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar

seriesFavoritas = JSON.parse(recuperoStorage);
}

  var datos = new URLSearchParams(location.search);
  var idSerie = datos.get("id");



  fetch("https://api.themoviedb.org/3/tv/" + idSerie + "?api_key=9901ee414425659325dc091c288e33c9&language=Es&page")
    .then(function(response) {
      return response.json();
    })
    .then(function(results) {
      console.log(results);
      if (seriesFavoritas.includes(idSerie)) {
      document.querySelector("button").innerHTML = "Quitar de favoritos";}
      else {
      document.querySelector("button").innerHTML = "Agregar a favoritos";
      }
    })

    document.querySelector("button").onclick = function() {
    
      //Paso 2: Modificar la informacion
      // Si el gif ya era favorito
      if (seriesFavoritas.includes(idSerie)) {
        // Lo quito
        var index = seriesFavoritas.indexOf(idSerie);
        seriesFavoritas.splice(index, 1);
        document.querySelector("button").innerHTML = "Agregar a favorito";
      } else {
        //Lo agrego
        seriesFavoritas.push(idSerie);
        document.querySelector("button").innerHTML = "Quitar de favoritos";
      }
      //Paso 3: Escribir en storage
      var informacionStorage = JSON.stringify(seriesFavoritas);
      localStorage.setItem("seriesFavoritas", informacionStorage);
      console.log(localStorage);
    }







})
