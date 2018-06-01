        // compongo un json con nombre, email, contraseña . method post a login
        // si la validacion es erronea

var xmlHttp = new XMLHttpRequest (); //create request 
const urlServer = "http://10.1.2.10:8080/appwebprofe/";
var formulario;
var botonEnviar = document.getElementById("enviar");
botonEnviar.addEventListener("click",validar,false);



function passwordMatching (){
    var password = document.getElementById("password").value; //get input password
    var passwordCheck = document.getElementById("passwordCheck").value; //get input passwordCheck
    if (password !== passwordCheck){
        alert("password & password check doesnt match!");
    }
}


function validar (){
    console.log("validando");
    var nombre = document.getElementById("name").value; //get input name
    var email = document.getElementById("email").value; //get input email
    var password = document.getElementById("password").value; //get input password
    var passwordCheck = document.getElementById("passwordCheck").value; //get input passwordCheck
    var phone = document.getElementById("phone").value; //get input phone
    var extension = $("#phone").intlTelInput("getExtension"); //get extension
    var web = document.getElementById("web").value; //get input web

    const EXPRESION_REGULAR_USUARIO_MAIL = /^\w{6,}$/; //El mail y el usuario deben tener al menos 6 caracteres formado por letras, números o guiones bajos
    const EXPRESION_REGULAR_EMAIL = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; 
    const EXPRESION_REGULAR_WEB = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/; 
    const EXPRESION_REGULAR_TELEFONO = /^\+\d{7,15}$/; 
    const EXPRESION_REGULAR_PWD = /^\w{6,15}$/; 

    var patron_usuario = new RegExp(EXPRESION_REGULAR_USUARIO_MAIL);
    var patron_mail = new RegExp(EXPRESION_REGULAR_EMAIL);
    var patron_web = new RegExp(EXPRESION_REGULAR_WEB);
    var patron_telefono = new RegExp(EXPRESION_REGULAR_TELEFONO);
    var patron_password = new RegExp(EXPRESION_REGULAR_PWD);

    passwordMatching(password, passwordCheck);
    
    var usuario_val = patron_usuario.test(nombre);
    var correo_val = patron_mail.test(email);
    var password_val = patron_password.test (password);
    var telefono_val = patron_telefono.test(phone);
    var web_val = patron_web.test (web);
    

    if (usuario_val && correo_val && password_val){
        alert ("validacion correcta!");
        formulario = {
            nombre: nombre,
            email: email,
            contraseña: password,
            web: web,
            phone: phone
        }
        enviar (formulario);
    } else {
        alert ("error de validacion!");
        nombre = document.getElementById("name");//selector nombre
        email = document.getElementById("email");//selector email
        password = document.getElementById("password"); //selector password
        nombre.setCustomValidity("El mail y el usuario deben tener al menos 6 caracteres formado por letras, números o guiones bajos!");
        email.setCustomValidity("Introduce un email valido!");
        password.setCustomValidity("Introduce un contraseña con al menos 6 caracteres!!");
    }

    
}



function enviar (formulario){
    var data = JSON.stringify(formulario);
    var url = urlServer + "Login" //sending data server route
    xmlHttp.open('POST', url, true);  // open (method, service, asynchrono)
    xmlHttp.setRequestHeader('Content-Type', 'application/json', 'charset=UTF-8') // headers : content type & mime type. 
    xmlHttp.send (data); //content message
    xmlHttp.onreadystatechange = procesarEventoClave;
}


function procesarEventoClave()
{
if(xmlHttp.readyState==4) //ya hemos recibido respuesta del servidor
{
    if(xmlHttp.status==200)// y el código de la cabecera http es bueno
        {
            alert("He recibido " + xmlHttp.responseText);
            //location.href = "http://www.cnn.com";
        }
    else
    {
        alert("Ha ocurrido un error"+ xmlHttp.status +":"+ xmlHttp.statusText);
    }
}
}