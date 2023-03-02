//******************************Tipo de dato string
var nombre = "Cris";
console.log(nombre);

//*****************************Tipo de dato numerico
var numero = 13;
console.log( typeof numero)

//*****************************Tipo de dato objeto
var objeto = {
    nombre: "Juan",
    apellido: "Vega",
    celular: 4463634637
}
console.log(objeto)

//*****************************Tipo de dato boolean 
var vandera = true;
console.log( typeof vandera)

//*****************************Tipo de datos funcion 
function miFuncion(){}
console.log( typeof miFuncion);
console.log (miFuncion);

//******************************Tipo de dato symbol
var simbolo = Symbol("Mi simbolo");
console.log(simbolo)
console.log(typeof simbolo)

//******************************Tipo clase es una funcion
class persona {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(persona)
console.log(typeof persona)

//*******************************Tipo de dato undefine
var x;
console.log(x);
console.log(typeof x);

//*******************************Tipo de dato null
var y = null;
console.log(y);
console.log(typeof y);

//********************************Tipo de dato object array
var autos= ["BMW", "Audi", "Volvo"];
console.log(autos);
console.log(typeof autos);

//********************************Tipo de dato cadena vacia
var z = "";
console.log(z + " <= cadena vacina");
console.log(typeof z);