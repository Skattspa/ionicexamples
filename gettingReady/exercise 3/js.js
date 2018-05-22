
// example 3
// 3) HACER UNA PÁGINA QUE DADO UN NÚMERO, DIGA SI ES PAR O NO 

// function esPar (){
//     var number = document.getElementById("esPar").value;
//     console.log(number);

//     if (number%2 ===0){
//         alert("Es par par!  ");   
//     } else {
//         alert("pues no es par");
//     }
// }

//example 4

//4) HACER UNA PÁGINA QUE LE PIDA AL USUARIO SU EDAD Y LE DIGA SI ES MAYOR DE EDAD O NO 


// function preguntar(){
//     var edad = prompt("Cual es tu edad?escribe un numero");
//     if (edad>=18){
//         console.log("edad", edad);
//         alert("Tienes "+edad+" años! A la cárcel!")
//     }else{
//         alert("eres un menor afortunao!");
//     }
// }

//example 5
//5) HACER UNA PÁGINA QUE PERMITA INTROUCIR UNA NOTA DE 0 A 10 Y DIGA SI EQUIVALE A UN APROBADO, 
//BIEN, NOTABLE, O SOBRESALIENTE 
function miNota(){
    var answer = prompt("Cual es tu nota? Escribela con numero");
    var nota = parseInt(answer);
    switch(nota){
        case 0:
            alert("Has suspendido machote!");
            break;
        case 1:
            alert("Has suspendido machote!");
            break;
        case 2:
            alert("Has suspendido machote!");
            break;
        case 3:
            alert("Has suspendido machote!");
            break;
        case 4:
        alert("Has suspendido machote");
            break;
        case 5:
            alert("Aprobado!");
            break; 
        case 6:
            alert("BIEN!");
            break; 
        case 7:
            alert("NOTABLE!");
            break;
        case 8:
            alert("NOTABLE!");
            break;
        case 9:
            alert ("Sobresaliente!");
            break;
        case 10:
            alert ("Sobresaliente!");
            break;
        default:
            alert("Número escrito no válido");
    }
}
