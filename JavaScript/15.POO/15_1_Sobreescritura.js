class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    get obtenerNombre(){
        return this.nombre;
    }

    set modificarNombre(nombre){
        this.nombre = nombre;
    }

    get obtenerSueldo(){
        return this.sueldo;
    }
    set modificarSueldo(sueldo){
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Nombre: ${this.nombre}\nSueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    
    constructor(nombre, sueldo){
        super(nombre, sueldo)
    }

    //Este metodo sobreescribe el metodo heredado de la clase padre con el mismo nombre;
    obtenerDetalles(){
        return `\n*El gerente ${this.nombre} gana s/.${this.sueldo}`;
    }
}

let empleado1 = new Empleado("Cristian", 5600);
console.log(empleado1.obtenerDetalles());

let gerente1 = new Gerente("Daniel", 4,800);   
console.log(gerente1.obtenerDetalles());