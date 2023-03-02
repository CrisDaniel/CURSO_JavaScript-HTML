class Persona{

    static contadorPersonas = 1;

    constructor(nombre, apellido, edad){
        this.idPersonad = Persona.contadorPersonas++;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    get obtenerIdPersona(){
        return this.idPersona;
    }

    get obtenerNombre(){
        return this.nombre;
    }
    set modificarNombre(nombre){
        this.nombre = nombre;
    }

    get obtenerApellido(){
        return apellido;
    }
    set modificarApellido(apellido){
        this.apellido = apellido;
    }

    get obtenerEdad(){
        return this.edad;
    }
    set modificarEdad(edad){
        this.edad = edad;
    }

    toString(){
        return `${this.idPersonad} ${this.nombre} ${this.apellido} ${this.edad}`;
    }
}

let persona1 = new Persona("Cris", "Revoredo", 24);
console.log(persona1.toString());

let persona2 = new Persona("Cielo", "Ramirez", 21);
console.log(persona2.toString());

class Empleado extends Persona{

    static  contadorEmpleado = 1;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad)
        this.idEmpleado = Empleado.contadorEmpleado++;;
        this.sueldo = sueldo;
    }

    get obtenerIdEmpleado(){
        return this.idEmpleado;
    }

    get obtenerSueldo(){
        return this.sueldo;
    }
    set modificarSueldo(sueldo){
        this.sueldo = sueldo;
    }

    toString(){
        return super.toString() + " " +this.idEmpleado + "  "+this.sueldo;
    }
}

let empleado1 = new Empleado("Cris", "Revoredo", 24, 2400);
console.log(empleado1.toString());

let empleado2 = new Empleado("Cielo", "Ramirez", 21, 2350);
console.log(empleado2.toString());

class Cliente extends Persona{

    static contadorClientes = 1;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad)
        this.idCliente = Cliente.contadorClientes++;
        this.fechaRegistro = fechaRegistro;
    }

    get obtenerIdCliente(){
        return this.idCliente;
    }

    get obtenerFechaRegistro(){
        return this.fechaRegistro;
    }
    set modificarFechaRegistro(fechaRegistro){
        this.fechaRegistro = fechaRegistro;
    }

    toString(){
        return super.toString() + " " +this.idCliente + " " +this.fechaRegistro;
    }
}

let cliente1 = new Cliente("Cris", "Revoredo", 24, new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente("Cielo", "Ramirez", 21, new Date());
console.log(cliente2.toString());