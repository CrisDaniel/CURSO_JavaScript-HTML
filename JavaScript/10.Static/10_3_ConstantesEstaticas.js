class Persona{

    static contadorObjetosPersona = 1;  //!Atributo estatico... Atributo de clase(Solo se accede a traves de la clase)

    static get maxObjetos(){    //!No se puede moodificar este por que funciona como una constante estatica.
        return 5;
    }

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        if (Persona.contadorObjetosPersona <= Persona.maxObjetos) {
            this.idPersona = Persona.contadorObjetosPersona++;
        } else {
            console.log("Error: A excedido el numero de objetos");
        }
    }

    get obtenerNombre (){
        return this.nombre;
    }

    get obtenerApellido(){
        return this.apellido;
    }

    set cambiarNombre (nombre){
        this.nombre = nombre;
    }

    set cambiarApellido(apellido){
        this.apellido = apellido;
    }

    presentar(){
        return this.idPersona + " Mi nombre es " + this.nombre + " " + this.apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido)
        this.departamento = departamento;
    }

    get obtenerDepartamento(){
        return this.departamento;
    }

    set cambiarDepartamento(departamento){
        this.departamento = departamento;
    }

    presentarTodo(){
        return super.presentar() + " y trabajo en el departamento de " + this.departamento;
    }
}

let persona1 = new Persona("Juan", "Ramos");
console.log(persona1.presentar());

let empleado1 = new Empleado("Cristian", "Daniel", "sistemas");
console.log(empleado1.presentarTodo());

let persona2 = new Persona("Nicol", "Reyes");
console.log(persona2.presentar());

let persona3 = new Persona("Alejandro", "Duran");
console.log(persona3.presentar());

let persona4 = new Persona("Benito", "Cartagena");
console.log(persona4.presentar());

let empleado2 = new Empleado("Daniel", "Meza", "Informatica");
//console.log(empleado2.presentarTodo());

