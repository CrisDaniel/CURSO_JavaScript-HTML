class Persona{
    constructor(nombre, apellido, dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
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

    get obtenerDni(){
        return this.dni;
    }
    set modificarDni(dni){
        this.dni = dni;
    }
}