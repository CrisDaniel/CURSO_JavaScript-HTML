class Persona{
    constructor (nombre, apelllido, cel, edad, genero){
        this.nombre = nombre;
        this.apelllido = apelllido;
        this.celular = cel;
        this.edad = edad;
        this.genero = genero
    }
    get mostrar(){
        return "Nombre: " + this.nombre +"\nApellido: " + this.apelllido + "\nCelular: " + this.celular +
        "\nEdad: " + this.edad + "\nGenero: " + this.genero + "\n";
    }
}

let darling = new Persona("Cris", "Ramirez", 924681367, 20, "Femenino");
console.log(darling.mostrar);

let i = new Persona ("Cristian", "Revoredo", 926979853, 24, "Masculino");
console.log(i.mostrar);