function Persona(nombre, apellido, celular,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.cel = celular;
    this.edad = edad;
    this.datosCompletos = function(){
        return this.nombre + " " + this.apellido + " tiene " + this.edad +" años de edad."
    }
}

let padre = new Persona("Juan", "Solar", "926979853", 45);
console.log(padre.datosCompletos());

//Diferentes manera de crear un objeto.
let tipoObjeto = new Object();              //Tipo Objeto.
let tipoObjeto1 = {};

let tipoString = new String("Mundo");
let tipoString1 = "Mundo";

let tipoNumber = new Number(45);
let tipoNumber1 = 34;

let tipoBoolean = new Boolean(false);
let tipoBoolean1 = true;

let tipoArray = new Array();
let tipoArray1 = [];

let tipoFuncion = new Function();
let tipoFuncion1 = function(){};

