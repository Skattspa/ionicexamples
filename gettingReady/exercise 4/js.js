
//4) HACER UNA PÁGINA QUE LE PIDA AL USUARIO SU EDAD Y LE DIGA SI ES MAYOR DE EDAD O NO 


function preguntar(){
    var edad = prompt("Cual es tu edad?escribe un numero");
    if (edad>=18){
        console.log("edad", edad);
        alert("Tienes "+edad+" años! A la cárcel!")
    }else{
        alert("eres un menor afortunao!");
    }
}