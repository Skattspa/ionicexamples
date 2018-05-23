//7) HACER UN PROGRAMA QUE MUESTRE ALERTS EN LA SECUENCIA 3, 6, 9, 12, 15 ...99

window.onload = alertInicia;

function alertInicia(){
    for (i = 0; i<=99; i+=3){
        alert ([i]);
    }
}