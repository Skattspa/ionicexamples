var cadena = new String("vale");

// console.log (cadena);
// console.log (cadena.valueOf());
// console.log (cadena.toString());
//function constructor 
function Dni(numero1) {
    this.numero = numero1
}

Dni.prototype = {
    calcularLetra: function () {
        var letra = '';
        var SECUENCIA_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";
        letra = SECUENCIA_DNI.charAt(this.numero % 23);
        return letra;
    }
}

//definir un metodo estatico
Dni.esValido = function (cadena) {
    var valido = false;
    valido = !isNaN(cadena) && (cadena>0) && (cadena.length === 8 );
    return valido;
}

var dni = new Dni(50618842);
var result = Dni.esValido("12345678");
var miLetra = dni.calcularLetra(dni.numero);

console.log (result);
console.log (miLetra);
//esValido(Dni);

console.log("dni numero", dni.numero);
console.log("dni proto", dni.__proto__);

