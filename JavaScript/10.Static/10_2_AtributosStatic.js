class Persona{

    static contadorObjetosPersona = 0;  //!Atributo estatico... Atributo de clase
    gmail = "cristian@gmail.com";       //!Atributo de no estatico... Atrinuto de objeto

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log("Se incremento contador en: " + Persona.contadorObjetosPersona);
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
        return "Mi nombre es " + this.nombre + " " + this.apellido;
    }

    static saludar(){
         console.log("Saludos desde el metodo static");
    }

    static saludar2(parametroPersona){
        console.log(parametroPersona.presentar());
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

//! empleado1.saludar();  El objeto no puede ejecutar los metodos static, solo se asocia con la clase y no con el objeto
Persona.saludar();  //El metodo static se puede llamar desde la clase en donde fue creada y en las heredadas.
Empleado.saludar(); //El metodo static se puede llamar desde la clase en donde fue creada y en las heredadas.

Persona.saludar2(persona1); // Mandamos el objeto persona1 al parametro del metodo static saludar2();
Empleado.saludar2(empleado1);

console.log(empleado1.gmail);