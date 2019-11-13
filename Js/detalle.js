<<<<<<< Updated upstream
window.onload = function() {
  console.log("OK");
  var idGenero = new URLSearchParams(location.search).get("id");
  fetch("https://api.themoviedb.org/3/tv/" + idGenero + "?api_key=9901ee414425659325dc091c288e33c9&language=es")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    console.log(respuesta);

    var nombre = respuesta.name;
    var anio = respuesta.first_air_date;
    var poster = respuesta.poster_path;
    var generos = respuesta.genres[0].name;
    var estrellas = respuesta.vote_average;
    var lenguajeOriginal = respuesta.original_language;
    var sinopsis = respuesta.overview;

    if (lenguajeOriginal == "en"){
      lenguajeOriginal = "Ingles"
    }
    else {
      lenguajeOriginal= lenguajeOriginal
    }

    var total = document.querySelector("div.total");
    total.innerHTML += `
    <div class="total"><div class="imagen"><img src="http://image.tmdb.org/t/p/w200/`+ poster + `" alt=""></div><div class="detalle"><div class="display">
    <h2>`+nombre +`</h2><h4>`+estrellas+`<ion-icon name="star"></ion-icon></h4></div>
    <h3>`+ anio +`</h3><h6>Genero: `+generos+`</h6><h6 class="">Lenguaje original: `+ lenguajeOriginal +`</h6>
    <p>`+ sinopsis +`</p></div>
    </div>
    `;


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






}
/*

"<div class="total"><div class="imagen"><img src="+ +" alt=""></div><div class="detalle"><div class="display">
<h2>TITULO  DE LA SERIE</h2><h4>CANITAD DE ESTRELLAS<ion-icon name="star"></ion-icon></h4></div>
<h3>AÑO</h3><h6>GENEROS</h6><h6 class=""> duracion</h6><h6 class=""> actores principales</h6><h6 class=""> Lenguaje orignial </h6><h6>descripcion</h6>
<p>Resumen: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
</div>"

*/
=======
>>>>>>> Stashed changes
