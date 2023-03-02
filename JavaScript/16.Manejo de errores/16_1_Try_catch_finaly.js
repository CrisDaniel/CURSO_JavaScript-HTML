"use strict"

try {               //Captura y muestra el error para despues continuar.
    //let x = 10;
    miFuncion();  //Prueba para error. Arroja error.
} catch (errores) {
    console.log(errores);
} finally{          //Siempre se ejecutara el bloque finaly.
    console.log("Termino la revision de errores.")
}

console.log("\nEl programa continua.......")