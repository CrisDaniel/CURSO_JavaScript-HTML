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
    
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo)
        this.departamento = departamento
    }
    
    obtenerDetalles(){
        return `\n*El gerente ${this.nombre} gana s/.${this.sueldo}`;
    }
}

function determinarTipo(objeto){
    console.log(objeto.obtenerDetalles());
    if(objeto instanceof Gerente){                                  //Por herencia el objeto gerente1 pertenece al tipo Empleado;
        console.log("Departamento de: " + objeto.departamento);
        console.log("Es de tipo Gerente");
    }
    if(objeto instanceof Empleado){
        console.log("Es de tipo EMPLEADO");
    }
    if (objeto instanceof Object){
        console.log("Es de tipo OBJECT");
    }
}

let empleado1 = new Empleado("Cristian", 5600);
determinarTipo(empleado1);

let gerente1 = new Gerente("Daniel", 4800, "Sistemas");
determinarTipo(gerente1);