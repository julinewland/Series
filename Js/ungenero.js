window.onload = function (){

var idGen = new URLSearchParams(location.search).get("id");
console.log(idGen);
// esto es lo que te da en la url el numero que yo depsues tengo que ir cambiando por los disntitos generos
fetch("https://api.themoviedb.org/3/discover/tv?api_key=9901ee414425659325dc091c288e33c9&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres="+ idGen +"&include_null_first_air_dates=false")
.then(function(response) {
  return response.json();
})
.then(function(respuesta) {
console.log(respuesta.results);
  // ENCONTRAR COMO CAMBIAR QUE EN CADA GENERO TE APAREZCA EL GENERO QUE QUERES Y NO SIEMPRE CAMBIAR EL (12) PARA QUE VAYA VARIANDO


  var serie = respuesta.results;

  var div = document.querySelector(".total")
  console.log(div);

  for (var i = 0; i < serie.length; i++) {
    //OJO, CAMBIAR
      div.innerHTML += "<div class='punt'><a href=detalle.html?"+ serie[i].id +"><img src=http://image.tmdb.org/t/p/w200"+ serie[i].poster_path +"></a><h5>" + serie[i].name + "</h5><h6>"+serie[i].vote_average+"<ion-icon name='star'></ion-icon></h6></div>"
    //document.querySelector(".textof").innerHTML += "<h2>"+serie[].genres+":</h2>"
  }
})
.catch(function(error) {
  alert("Error, perdon, vuelva mas tarde")
})

}
