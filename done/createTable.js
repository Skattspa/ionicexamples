window.onload = function (){
    inicia();
}
var arrayTexto;
function inicia (){
    var arrayTexto = new Array(); // crear array vacio
}

function obtenerTexto (){
    //get text
    var texto = '';
        texto = document.getElementById("string").value;
    return texto
}

// function insertarFila (texto){
//     var tabla = document.getElementById("tabla")
//     var nuevaFila = document.createElement("tr");
//     var nuevaColumna = document.createElement("td");
//     var index = 0;
//         nuevaFila.id = index ++;
//         nuevaColumna.innerHTML = texto; // meter texto en columna
//         nuevaFila.appendChild(nuevaColumna); //meter texto en fila
//         tabla.appendChild(nuevaFila); // añadir fila y añadir id
// }

function guardarTexto (texto){
    arrayTexto.push(texto); //guardar texto en el array
    console.log("texto guardado", texto);
    
}

// function limpiar (){
//     document.getElementById("string").value = "";
//     document.getElementById("string").focus();

// }

function insertar() {
           console.log(arrayTexto);
    var texto = obtenerTexto();
    guardarTexto (texto);
    // insertarFila(texto);
    // limpiar();

}

