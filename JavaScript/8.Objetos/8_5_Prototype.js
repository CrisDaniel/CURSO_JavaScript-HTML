function Persona(nombre, apellido, celular,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.cel = celular;
    this.edad = edad;
    this.datosCompletos = function(){
        return this.nombre + " " + this.apellido + " tiene " + this.edad +" años de edad."
    }
}
Persona.prototype.genero = "GeneroDePersona";       //Con prototype agregamos un atributo mas al constructor Persona.

let padre = new Persona("Juan", "Solar", "926979853", 45);
padre.genero = "Masculino";
console.log(padre);

let madre = new Persona("Juana", "Rengifo", "936783229", 43);
madre.genero = "Femenino";
console.log(madre);