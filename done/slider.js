var imagen;
var intervalo;
function colorRojo(){
    imagen = document.getElementById("imagen"); //seleccionar imagen
    imagen.style.backgroundColor= "red"; //cambiar a rojo
}

function colorNegro(){
    imagen = document.getElementById("imagen"); //seleccionar imagen
    imagen.style.backgroundColor= "black"; //cambiar a negro
}

function activar(){
    intervalo =  setInterval(function(){
        var imgArray =["hormi5.jpg", "esqueleto-humano.jpg", 
        "html5.png", "css3.png"]; // array de imagenes
        imagen = document.getElementById("imagen"); //seleccionar imagen
        dameImagen(imgArray); //darle nueva imagen
    }, 3000);
}

function dameImagen (imgArray){
    var num = Math.floor(Math.random() * (imgArray.length)); // random imagen indice
    imagen.src = imgArray[num]; //cambiar el src de la imagen
    console.log("Cambio imagen a"+imagen.src); //loguear en la consola
}

function parar(){
    clearInterval(intervalo); //limpiar intervalo
}

function limpiarImagen (){
    imagen.style.backgroundColor= "transparent"; //limpiar imagen
    imagen.src ="#"; //limpiar src imagen
}
