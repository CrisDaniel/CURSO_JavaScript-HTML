limiteMaxYMin(45, 20, 55);

function limiteMaxYMin(numero, minimo, maximo) {
    if (numero >= minimo && numero <= maximo) {
        console.log("El numero {" + numero + "} esta dentro del rango.")
    } else {
        console.log("El numero {" + numero + "} no esta dentro del rango.")
    }
}