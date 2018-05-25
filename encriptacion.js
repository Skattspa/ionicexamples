/*
get text
string.charCodeAt(0) /
enviar
Briconsejos: 
- mejorar nombrar variables. usar palabras diferentes a standar,string,etc
- 
*/

window.onload = obtenerClave // obtain key onload

var xmlHttp = new XMLHttpRequest ();
const urlServer = "http://10.1.2.10:8080/appwebprofe/"

var stringUser = '';
var stringMask = '';
var serverCiferKey = '';

function cifrar (){
    stringUser = document.getElementById("string").value //get user string
    console.log ("orginal: "+stringUser);
    for (indice = 0; indice< stringUser.length; indice++){
        var masking = serverCiferKey+stringUser.charCodeAt(indice);
        stringMask = stringMask + masking //create masking values
    }
    console.log (stringMask);
    console.log ("clave de cifrado de Valeriano", serverCiferKey);
    let stringCifrado = document.getElementById("stringCifrado").setAttribute('value',stringMask); //input cifrado

    return stringMask;
}


function enviar (){
    let ciferedString = stringMask;
    let unciferedString = stringUser;
    var mensaje = {
        mensaje_original: unciferedString,
        mensaje_cifrado: ciferedString,
        clave: serverCiferKey
    }
    mensaje = JSON.stringify(mensaje);
    // Call
    var url = urlServer + "EnviarMensaje" //sending data server route
    xmlHttp.open('POST', url, true);  // open (method, service, asynchrono)
    xmlHttp.setRequestHeader('Content-Type', 'application/json') // headers : content type & mime type. 
    xmlHttp.send (mensaje); //content message
    xmlHttp.onreadystatechange = procesarEventos;
}

function obtenerClave (){
    console.log ("obteniendo clave");
    var url = urlServer + "ObtenerClave" //getting data server route
    xmlHttp.open('GET', url, true);  // open (method, service, asynchrono)
    xmlHttp.setRequestHeader('Content-Type', 'application/json') // headers : content type & mime type. 
    xmlHttp.send();//El cuerpo del mensaje
    xmlHttp.onreadystatechange = procesarEventoClave; //let me know what is happening! :)

}


function procesarEventoClave()
{
   
  if(xmlHttp.readyState==4) //ya hemos recibido respuesta del servidor
  {
      if(xmlHttp.status==200)// y el código de la cabecera http es bueno
          {
            alert("He recibido " + xmlHttp.responseText);
            serverCiferKey = JSON.parse(xmlHttp.responseText) // usar clave de valeriano
          }
      else
      {
          alert("Ha ocurrido un error"+ xmlHttp.status +":"+ xmlHttp.statusText);
      }
  }
}

function procesarEventos()
{
   
  if(xmlHttp.readyState==4) //ya hemos recibido respuesta del servidor
  {
      if(xmlHttp.status==200)// y el código de la cabecera http es bueno
          {
            alert("Valeriano Server dice:  " + xmlHttp.responseText);
          }
      else
      {
          alert("Ha ocurrido un error"+ xmlHttp.status +":"+ xmlHttp.statusText);
      }
  }
}