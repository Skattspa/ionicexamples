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
