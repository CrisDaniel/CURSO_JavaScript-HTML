let cadena = palindromo("Anita lava la tina");

function palindromo(cadena){

    cadena = cadena.toLowerCase();  //Convertir la cadena en minuscula
    cadena = cadena.split("");      //Convertir a la cadena en un array.
    console.log(cadena);

    let cadenaSinEspacio = [];

    //Creamos otro array que no contenga los espacios de la cadena.
    cadena.forEach(element => {
        if (element != " ") {
            cadenaSinEspacio.push(element);
        }
    });

    const cadenaNormal = cadenaSinEspacio;
    let cadenaReverse = cadenaSinEspacio.concat().reverse();    //concat (Crea un nuevo array a partir de otro,se puede agregar nuevo valores);
                                                                //Reverse (Revirte el orden del array original sin crear una copia.)
    
    console.log(cadenaNormal + " Hola");
    console.log(cadenaReverse + " Hola");

    let comparacion = true;

    for (let index = 0; index < cadenaReverse.length; index++) {
        if (cadenaSinEspacio[index] == cadenaReverse[index]) {
        } else{
            comparacion = false;
        }
    }

    if (comparacion == true) {
        console.log("Es palindromo")
    } else {
        console.log("No es palindromo");
    }
}