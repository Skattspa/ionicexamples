
onload = solicitar;

var xmlHttp = new XMLHttpRequest (); //create request 
const urlServer = "http://10.1.2.10:8080/Marcador/";
var infoPartido;


var goleador = document.getElementById("goleador");
var golesLocal = document.getElementById("golesLocal");
var golesVisitante =  document.getElementById("golesVisitante");
var comentariosLista = document.getElementById("comentarios");


var interval = setInterval(function(){  // intervalo de refresh
    console.log ("updating");
    limpiar()     
    solicitar();
 }, 5000);


function solicitar (){
    limpiar();
    var url = urlServer + "ActualizarInfoPartido" 
    xmlHttp.open('GET', url, true);  // open (method, service, asynchrono)
    xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8') // headers : content type & mime type. 
    xmlHttp.send ("null"); //content message
    xmlHttp.onreadystatechange = procesarEvento;
}

function procesarEvento (){
    if(xmlHttp.readyState==4) //ya hemos recibido respuesta del servidor
    {
        if(xmlHttp.status==200)// y el código de la cabecera http es bueno
            {
                //alert("He recibido " + xmlHttp.responseText);
                infoPartido = JSON.parse(xmlHttp.responseText); // parse!
                //console.log(infoPartido);
                procesarActualizacion();
            }
        else
        {
            alert("Ha ocurrido un error"+ xmlHttp.status +":"+ xmlHttp.statusText);
        }
    }
}

function procesarActualizacion (){
        var imagen = document.getElementsByClassName("imagenCabecera");
        console.log (infoPartido.fotopartido); //foto
        imagen[0].src = urlServer + infoPartido.fotopartido; //añadir imagen
        //console.log(imagen);
        mostrarComentarios(); //procesar comentarios
        mostrarMarcador(); // procesar marcador
}

function mostrarComentarios (){
    var liMinuto;
    var liComentario;
        for (var i=0; i<infoPartido.listacomentarios.length; i++){
            liMinuto = document.createElement("li");
            liComentario = document.createElement("li");
            //console.log(infoPartido.listacomentarios[i]);
            liMinuto.innerHTML = infoPartido.listacomentarios[i].minuto; // almacenar minuto
            //console.log("liMinuto",liMinuto.innerHTML);
            liMinuto.style.backgroundColor = "#8e1b1b";
            liComentario.innerHTML = infoPartido.listacomentarios[i].comentario; // almacenar comentario
            liComentario.style.backgroundColor = "#c9c7c7";
            //console.log("liComentario",liComentario.innerHTML);
            comentariosLista.appendChild(liMinuto);  // mostrar minuto
            comentariosLista.appendChild(liComentario); // mostrar comentario
        }
}

function mostrarMarcador (){
    golesLocal.innerHTML = infoPartido.marcador.goles_local; //mostrar goles local
    golesVisitante.innerHTML = infoPartido.marcador.goles_visitante; //mostrar goles visitante
}


function limpiar (){
    var comentariosLista = document.getElementById("comentarios");
    while (comentariosLista.firstChild) {
        comentariosLista.removeChild(comentariosLista.firstChild);
    }
}



