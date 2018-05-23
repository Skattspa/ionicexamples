
// example 2
// 2) HACER UNA PÁGINA OBTENGA UN STRING Y UNA LETRA DEL USUARIO Y 
// DIGA CUÁNTAS VECES APARECE ESE LETRA EN LA CADENA
function buscaMiLetra(){
    var string = document.getElementById("string").value;
    var letra = document.getElementById("letra").value;
    console.log ("letra",letra);
    var array= Array.from(string);
    console.log ("string array",array);
    var letraEncontrada = 0;
    for (i=0; i<array.length; i++){
        if (array[i]===letra){
            letraEncontrada = letraEncontrada+1;
            alert ("encontré tu letra!");
        }
    }
    console.log ("Encontré tu letra "+letraEncontrada+"veces");
}