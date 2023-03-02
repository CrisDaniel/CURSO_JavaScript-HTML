/*Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:

Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar().
Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar().
Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía.

 */



function Persona(){
  this.nombre = "";
  this.edad = 0;
  this.genero = "";
  this.obtDetalles = function(){
    return "Nombre: " + this.nombre+ "</br>" + "Edad: "+this.edad + "</br>" + "Genero: " + this.genero + "</br>";
  }
}

function Estudiante() {
  this.curso = "";
  this.grupo = "";
  this.registrar = function (){
      return "Curso: " + this.curso + "</br>" + "Grupo: " + this.grupo + "</br>";
  };
}

Estudiante.prototype = new Persona();   //La funcion Estudiante() se vuelve un objeto de Persona() y hereda sus atributos(Nombre, edad, genero).

let estudiante = new Estudiante();
estudiante.nombre = "Juan";
estudiante.edad = 24;
estudiante.genero = "Masculino";
estudiante.curso = "Programacion";
estudiante.grupo = "Dinosaurio";

document.write(estudiante.obtDetalles());
document.write(estudiante.registrar());


function Profesor() {
  this.asignatura = "";
  this.nivel = 0;
  this.asignar = function (){
      return "Asignatura: " + this.asignatura + "</br>" + "Nivel: " + this.nivel + "</br>";
  };
}

Profesor.prototype = new Persona();

let profesor = new Profesor();
profesor.nombre = "Paulino";
profesor.edad = 35;
profesor.genero = "Masculino";
profesor.asignatura = "PROGRAMACION II";
profesor.nivel = "Programador Junior";

document.write(profesor.obtDetalles());
document.write(profesor.asignar());


//Subir una imagen.
function mostrar(){
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo );
      reader.onloadend = function () {
        document.getElementById("img").src = reader.result;
      }
    }
  }
