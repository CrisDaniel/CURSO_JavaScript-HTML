class Persona{
    constructor(nombre, edad, genero, estadoCivil){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.estadoCivil = estadoCivil;
    }

    presentarse(){
        return "Soy " + this.nombre + " tengo " + this.edad + " años"
        + ", soy " + this.genero + " y estoy " + this.estadoCivil;
    }
}

class Estudiante extends Persona{
    constructor(nombre, edad, genero, estadoCivil, grado, colegio){
        super(nombre, edad, genero, estadoCivil);
        this.grado = grado;
        this.colegio = colegio;
    }

    estudiar(){
        return ". Soy de " + this.grado + "° grado y estudio en el colegio " + this.colegio + ".";
    }
}

class Maestro extends Persona{
    constructor(nombre, edad, genero, estadoCivil, materia, colegio){
        super(nombre, edad, genero, estadoCivil);
        this.materia = materia;
        this.colegio = colegio;
    }

    enseñar(){
        return ". Enseño " + this.materia + " en el colegio " + this.colegio + ".";
    }
}

let estudiante1 = new Estudiante("Cristal", 20, "femenino", "Soltera", 5,"Pedro Ruiz Gallo");
console.log(estudiante1.presentarse() + estudiante1.estudiar());

let profesor1 = new Maestro("Cristian", 24, "Masculino", "en una relacion", "Programacion", "Pedro Ruiz Gallo");
console.log(profesor1.presentarse() + profesor1.enseñar());