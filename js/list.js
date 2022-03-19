//var film1 = ["https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.brooklynvegan.com%2Ffiles%2F2019%2F01%2Flords-of-chaos.jpg%3Fw%3D600%26h%3D0%26zc%3D1%26s%3D0%26a%3Dt%26q%3D89&f=1&nofb=1", 
//"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F2gBEpsvDr19mt4hei4YQh854JiR.jpg&f=1&nofb=1",
//"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.movieassets.com%2Fstatic%2Fimages%2Fitems%2Fmovies%2Fposters%2F94ff4b96114dda307a6482c0eee478ca.jpg&f=1&nofb=1"]

//film1.push("Harry Potter");

//for (var i = 0; i < film1.length; i++) {
  //  document.write("<img src=" + film1[i] + ">");
//}
 function adicionarFilme(){
     var campoFilmeFav = document.getElementById("filme").value;
     if (campoFilmeFav.endsWith(".jpg")) {
        listarFilmesNatela(campoFilmeFav)
     } else {
         console.error("Invalido");
     }
     document.getElementById("filme").value = "";
    
 }

 function listarFilmesNatela(filme) {
    console.log(filme);
    var elementFilmFav = "<img src" + filme + ">";
    var elementListFilmFav = document.getElementById("listaFilmes");
    elementListFilmFav.innerHTML = 
         elementFilmFav.innerHTML + elementFilmFav;
 }
