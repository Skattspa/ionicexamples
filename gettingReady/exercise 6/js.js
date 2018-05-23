//6) HACER UNA PÁGINA QUE RECIBA INTRODUCIR UNA PALABRA Y MUESTRE UN ALERT CON LA PALABRA AL REVÉS 
var palabraVolteada = '';

window.onload = darVuelta;

function darVuelta (){
    var palabra = prompt("Escribe una palabra");
    for (i = palabra.length -1; i>= 0; i--){
        palabraVolteada += palabra[i];
    }
    console.log(palabraVolteada);
    alert (palabraVolteada);
}