var xmlHttp = new XMLHttpRequest ();
const urlServer = "http://10.1.2.10:8080/appwebprofe/RegistrarPersona"



function procesarEventos (){
    console.log ("procesar eventos " + xmlHttp.readyState);
    //when state is 4, process html response message 
    if (xmlHttp.readyState == 4){
        console.log("respuesta de valeriano: ",xmlHttp.responseText);
    }
}



function enviar (){
    var nombre = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var persona = {
        nombre: nombre,
        age: age
    }


   
    console.log ("enviar", persona.nombre, persona.age);
    var personaJson =  JSON.stringify(persona);
    console.log(personaJson);

    // Call
    xmlHttp.onreadystatechange = procesarEventos;
    xmlHttp.open('POST', urlServer, true);  // open (method, service, asynchrono)
    xmlHttp.setRequestHeader('Content-Type', 'application/json') // headers : content type & mime type. 
    xmlHttp.send (personaJson); //content message

    return false;
}



function cambio () {
    var nombre = document.getElementById("name").value;
    var age = document.getElementById("age").value;
        console.log("Nombre", nombre );
        console.log("Edad", age);
}