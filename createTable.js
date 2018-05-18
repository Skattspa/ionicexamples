// <!-- /*
// var array = new Array ();



// */
// Crear un boton + 
// onclick : coger las string de un <div></div>
// insertar esas string en el array
// imprimir ese array en una tabla


// 1. detecto evento onclick
// 2. inserto en un array el valor de la caja de texto
// 3.  inserto una fila en la tabla


//  -->

var array = new Array ();

function addString (){
    var string = document.getElementsByTagName("input").value;
    document.getElementById("addString").addEventListener("click", function (){
       array.push(string);
       addRow(array);
    })
}

function addRow (array){

    for(i=0; i<array.length;i++){
        var tr = document.createElement("tr");
        var table = document.getElementsByName("table");
        tr.innerHTML = [i];
        table.appenChild(tr);
    }
    
}

function removeRow (){

}






// function load (){
    
//     document.innerHTML = "<div id='container'></div>";
//     var container = document.getElementById("container");
//     // add div strings
//     //document.getElementById("container").innerHTML = "<div id='strings'><div>";
//     var newDiv = document.createElement("div");
//         newDiv.id = "strings";
//     var newButton = document.createElement("button");
//         newButton.id = "add";
//     var newTable = document.createElement("table");
//     var newRow = document.createElement("tr");

//     //add to container
//     //container.appendChild(newDiv);
    

    
// }
// function createDiv () {
    
//     // add button
//     document.getElementById("container").innerHTML= '<div id="buttonAdd"><div>';
//     document.getElementById("container").appendChild(botonHTML);
    
//     document.getElementById("add").addEventListener('click', function (){
//         console.log("click");

//     })
// }
// load ()

// var array = new Array ();
