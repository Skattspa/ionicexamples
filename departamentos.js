/* 
dibujar un select con option departamentos
cada departamentos tira un ajax para cambiar los option del otro
*/
onload = solicitar;

var xmlHttp = new XMLHttpRequest (); //create request 
const urlServer = "http://10.1.2.10:8080/appwebprofe/";

var departamentosArray //
var trabajadores;
var departamentos = document.getElementById("departamentos");
function solicitar (){
    var url = urlServer + "CargaMenuSelect" //sending data server route
    xmlHttp.open('GET', url, true);  // open (method, service, asynchrono)
    xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8') // headers : content type & mime type. 
    xmlHttp.send (null); //content message
    xmlHttp.onreadystatechange = procesarEventoDepartamentos;
}

function procesarEventoDepartamentos()
{
if(xmlHttp.readyState==4) //ya hemos recibido respuesta del servidor
{
    if(xmlHttp.status==200)// y el código de la cabecera http es bueno
        {
            //alert("He recibido " + xmlHttp.responseText);
            departamentosArray = JSON.parse(xmlHttp.responseText); // get the departments
            populateSelectMenuDepartment();
        }
    else
    {
        alert("Ha ocurrido un error"+ xmlHttp.status +":"+ xmlHttp.statusText);
    }
}
}



function populateSelectMenuDepartment (){

    var option;
    for (var i=0; i<departamentosArray.length; i++){
        option = document.createElement("option");
        console.log(departamentosArray[i].nombre);
        option.value= departamentosArray[i].numero;
        option.innerHTML = departamentosArray[i].nombre;
        departamentos.appendChild(option);
    }
}

departamentos.addEventListener("change",changeDepartment, false)

function changeDepartment (){
    console.log("cambio"); // working. move on
    var cambio = departamentos.options[departamentos.selectedIndex].text; //texto departamento
    var valor = departamentos.options[departamentos.selectedIndex].value; // valor departamento
    console.log(cambio, valor);
    limpiar(); //clean options of trabajadores
    getEmployes (valor);
    
}

function getEmployes (valor){
    var url = urlServer + 'CargarTrabajadores?dpto='+valor //get trabajadores
    xmlHttp.open('GET', url, true);  // open (method, service, asynchrono)
    xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8') // headers : content type & mime type. 
    xmlHttp.send (null); //content message
    xmlHttp.onreadystatechange = procesarEventoTrabajadores;
}



function procesarEventoTrabajadores (){
    if(xmlHttp.readyState==4) //ya hemos recibido respuesta del servidor
    {
        if(xmlHttp.status==200)// y el código de la cabecera http es bueno
            {
                //alert("He recibido " + xmlHttp.responseText);
                trabajadores = JSON.parse(xmlHttp.responseText); // get the departments
                populateSelectMenuTrabajadores();
            }
        else
        {
            alert("Ha ocurrido un error"+ xmlHttp.status +":"+ xmlHttp.statusText);
        }
    }
}

document.getElementById("trabajadores").style.visibility = "hidden"; // hide trabajadores
document.getElementById("labelTrabajadores").style.visibility = "hidden"; // hide label trabajadores

function populateSelectMenuTrabajadores (){
    document.getElementById("trabajadores").style.visibility = "visible"; // display trabajadores
    document.getElementById("labelTrabajadores").style.visibility = "visible"; // hide label trabajadores

    console.log("populating trabajadores", trabajadores);
    var selectTrabajadores = document.getElementById("trabajadores");
    console.log()
    var option;
    for (var i=0; i<trabajadores.length; i++){
        option = document.createElement("option");
        console.log(trabajadores[i].nombre);
        option.innerHTML = trabajadores[i].nombre;
        selectTrabajadores.appendChild(option);
    }
}


function limpiar (){
    var trabajadores = document.getElementById("trabajadores");
    while (trabajadores.firstChild) {
        trabajadores.removeChild(trabajadores.firstChild);
    }

}