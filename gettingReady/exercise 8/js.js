//8) HACER UNA PÁGINA CON 3 INPUT TEXT QUE EL USUARIO INTRODUZCA TRES NÚMEROS Y DIGA CUÁL ES EL MAYOR POR UN ALERT
//esto se puede hacer con promesas pero me va a requerir mas tiempo
function inputComprobar (){
    var inputUno = document.getElementById("uno").value;
    var inputDos = document.getElementById("dos").value;
    var inputTres = document.getElementById("tres").value;

    console.log(inputUno);
    console.log(inputDos);
    console.log(inputTres);

    inputUnoCheck(inputUno, inputDos, inputTres);
}

function inputUnoCheck (inputUno, inputDos, inputTres){
    if (inputUno>inputDos){
        console.log("Input 1 mayor que input 3");
    } else if (inputUno>inputTres){
        console.log("Input 1 mayor que input 3");
        alert("El numero mayor es: "+inputUno);
    } else {
        inputDosCheck(inputUno, inputDos, inputTres);
    }
}

function inputDosCheck (inputUno, inputDos, inputTres){
    if(inputDos>inputUno){
        console.log("Input 2 mayor que input 1");
    } else if (inputDos>inputTres){
        console.log("Input 2 mayor que input 3");
        alert("El numero mayor es: "+inputDos);
    } else {
        inputTresCheck(inputUno, inputDos, inputTres);
    }
}
function inputTresCheck (inputUno, inputDos, inputTres){
    if (inputTres>inputDos){
        console.log("Input 3 mayor que input 2");
    } else if (inputTres>inputUno){
        console.log("Input 3 mayor que input 1");
        alert("El numero mayor es: "+inputTres);
    } else {
        console.log("Cuidado! No queremos numeros repetidos!");
    }
}