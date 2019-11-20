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
      document.querySelector(".generos").innerHTML += "<a href=ungenero.html?id=" + genero[i].id + "&tituloGenero=" + genero[i].name + "><div class='genero'><h3>"+ genero[i].name +"</h3><img src='../Archivos/"+genero[i].name +".jpg' alt=''><div></a>"}
  })

// le tenes que agregar para que busco en un genero.html el id que sea relfejado en el otro html para que te busque en cierto genero ciertas perliculas. <a href=ungenero.html?id= tiene que estar vinculado con el js de genero.
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

}
