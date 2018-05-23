/* 
construir un constructor persona
atributos:  altura, peso
altura metros
peso en kg
calcularIMC(n)
calcularIMC(l)
*/

//constructores siempre con mayuscula
function Persona (altura, peso) {
    this.altura = altura;
    this.peso = peso;
}

Persona.prototype = {
    calcularIMCnumero : function ()
    {   
        //make unit conversion. convertir a metros.

        altura = this.altura/100;
        var IMC =  this.peso/(Math.pow(altura, 2));
        return IMC;
    },
    calcularIMCDescription : function (IMCnumero) 
    {
        if (IMCnumero<=16){
            console.log("Estas esqueletico. Toma un cocido.");
        }
        if (IMCnumero<=18 && IMCnumero>16){
            console.log("Estas delgado. Vete a comer.");
        }
        if (IMCnumero<=25 && IMCnumero>18){
            console.log("Estas normal. Vete de aqui.");
        }
        if (IMCnumero<=31 && IMCnumero>18){
            console.log("Estas gordo");
        }
        if (IMCnumero>31){
            console.log("Estas gordo, pero gordo, gordo");
        }
    }
}
//define persona
var persona = new Persona (175,100);

console.log (persona.altura);
console.log (persona.peso);
console.log(persona.__proto__);
var IMCnumero = persona.calcularIMCnumero(this.altura, this.peso);
var IMCdescription = persona.calcularIMCDescription(IMCnumero);



