"use strict"

let dato = -5;

try {               //Captura y muestra el error para despues continuar.
    //miFuncion();  //Prueba para error. Arroja error.
    //throw new Error ('Error en el sistema');                //Muestra como si fuera un error.
    if(isNaN (dato)) throw "No es un numero";
    if(dato === "") throw "Esta vacio";
    if(dato >= 0) throw "Es positivo";
    if(dato < 0) throw "Es negativo";

} catch (error) {
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
} finally{          //Siempre se ejecutara el bloque finaly.
    console.log("Termino la revision de errores.")
}

console.log("\nEl programa continua.......")