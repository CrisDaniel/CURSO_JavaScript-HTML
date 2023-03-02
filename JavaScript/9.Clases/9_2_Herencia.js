class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    get obtenerNombre(){
        return this.nombre;
    }

    set modificarNombre(nombre){
        this.nombre = nombre;
    }

    get obtenerApellido(){
        return this.apellido;
    }
    
    set modificarApellido(apellido){
        this.apellido = apellido;
    }

}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre,apellido)                      //super(): Permite llamar al constructor o cualquier metodo de la clase padre.
        this.departamento = departamento;
    }

    get obtenerDepartamento(){
        return this.departamento;
    }

    set modificarDepartamento(departamento){
        this.departamento = departamento;
    }
}

let empleado1 = new Empleado("Cristian", "Revoredo", "Informatica y Sistemas");
empleado1.modificarNombre = "Cristian Daniel";
console.log(empleado1.obtenerNombre);
console.log(empleado1.obtenerApellido);
console.log(empleado1.obtenerDepartamento);
console.log(empleado1);
