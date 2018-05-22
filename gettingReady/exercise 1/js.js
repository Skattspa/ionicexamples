
// 1) HACER UNA PÁGINA QUE OBTENGA UN STRING Y UNA LETRA DEL USUARIO Y DIGA SI CON UN ALERT SI 
// ESA LETRA PERTENECE AL STRING O NO 
function buscaMiLetra ()
{
    var string = document.getElementById("string").value;
    var letra = document.getElementById("letra").value;
    console.log ("letra",letra);
    var array= Array.from(string);
    console.log ("string array",array);

   for (i=0; i<string.length; i++ ){
        if (array[i]===letra){
            alert ("encontré tu letra!");
        } 
   }
}