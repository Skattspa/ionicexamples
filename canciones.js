// coger las cacniones con un get en estado 4 de la peticion
// recibir las canciones
// muestro ese json en elementos de la web.  en una tabla
// mostrar un gif mientras se cargan las canciones


/* 
Mejoraas añadir gif cuando estas esperando la busqueda
preveer que la busqueda esta vacia
que busque con el intro
*/


var xmlHttp = new XMLHttpRequest ();
const urlServer = "https://itunes.apple.com/search?term=";
//atributos de la cancion (trackid (oculto, none), trackprice +2, formatear precio a euros, previewUrl)

function cogerCanciones (){
    console.log ("obteniendo clave");
    var url = urlServer + document.getElementById("cantante").value + "&media=music&limit=20"; //getting data server route songs
    console.log("url: "+url);
    document.getElementById("cargando").setAttribute("class", "cargandoCssGif"); //añadir gif cargando
    xmlHttp.onreadystatechange = recibirCanciones; //let me know what is happening! :)
    xmlHttp.open('GET', url, true);  // open (method, service, asynchrono)
    xmlHttp.setRequestHeader('Content-Type', 'application/json') // headers : content type & mime type. 
    xmlHttp.send(null);//El cuerpo del mensaje
    
}

function recibirCanciones(){
    if (xmlHttp.readyState == 4){
        document.getElementById("cargando").removeAttribute("class"); //quitar gif cargando
        if(xmlHttp.status == 200)//  el código de la cabecera http es bueno
        {
            //var listaCanciones = xmlHttp.responseText // lista canciones
            //console.log ("hola soy el server, te traigo esto: " + listaCanciones);
            var listaCanciones = JSON.parse(xmlHttp.responseText); // canciones
            //declarar variables fuera del for. coger tabla fuera del for.
            var tabla = document.getElementById("tabla");
            
            for (i=0; i<listaCanciones.resultCount; i++){ //meter canciones
                //@TODO: pasar a una funcion la construccion dinamica de la tabla!!! Este for es demasiado largo.
                console.log ("he encontrado cancion" + listaCanciones.results[i].artistId);
                var artistId = listaCanciones.results[i].artistId ; 
                var trackName = listaCanciones.results[i].trackName ; 
                var trackPrice = listaCanciones.results[i].trackPrice + 2 ; 
                var previewUrl = listaCanciones.results[i].previewUrl; 
                var fila = document.createElement("tr");
                var columnaUno = document.createElement("td");
                var columnaDos = document.createElement("td");
                var columnaTres = document.createElement("td");
                var columnaCuatro = document.createElement("td");
                var columnaCinco = document.createElement("td");
                var primeraCancion = "";
              
                tabla.appendChild(fila).appendChild(columnaUno).innerHTML = artistId; //columna artistId
                tabla.appendChild(fila).appendChild(columnaDos).innerHTML = trackName; //columna trackName
                tabla.appendChild(fila).appendChild(columnaTres).innerHTML = trackPrice; //columna trackName
                tabla.appendChild(fila).appendChild(columnaCuatro).innerHTML = previewUrl; //columna previewUrl
                tabla.appendChild(fila).appendChild(columnaCinco).innerHTML = "<input type='checkbox'>"; //columna seleccion
                //comprar.addEventListener("click", comprar, false); //añadir evento al checked checkbox

            }
        }
        else
        {
            alert("Ha ocurrido un error"+ xmlHttp.status +":"+ xmlHttp.statusText);
        }

    } else {

    }
    
}



    function comprar (){
        /* @TODO: WIP - Seleccionar el artistId de la cancion que queremos comprar y prepararlo para enviarlo al servidor.
        
        */
    console.log("seleccion de checkbox", this);
}

