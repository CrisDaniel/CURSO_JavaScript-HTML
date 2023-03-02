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
    
    obtenerDetalles(){
        return `\n*El gerente ${this.nombre} gana s/.${this.sueldo}`;
    }
}

function imprimir(objeto){                  //POLIMORFISMO: Esta unica funcion tiene dos resultados diferentes.
    console.log(objeto.obtenerDetalles());
}

let empleado1 = new Empleado("Cristian", 5600);
imprimir(empleado1);

let gerente1 = new Gerente("Daniel", 4,800);
imprimir(gerente1);