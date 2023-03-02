let numero = 13;

function cambiarValor(parametro) {
    parametro = 20;
}

//Paso por valor 
cambiarValor(numero);

console.log(numero); //13
//console.log(parametro);//No esta definido


//Paso por referencia EJEMPLO;
const persona = {
    nombre: "Cielo",
    apellido: "Alcarraz",
    edad: "20",
    estado: "LOCA"
}

function cambiarValorObjeto (p1){
    p1.nombre = "Cristal";
    p1.apellido = "Ramirez";
    p1.estado = "Sigue de LOCA";
}

cambiarValorObjeto(persona);    //Paso por referencia.
console.log(persona);
