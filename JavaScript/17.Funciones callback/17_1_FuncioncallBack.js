function sumar(numero1, numero2, funcionImprimir) {
    let sum = numero1 + numero2;
    funcionImprimir(sum);
}

function imprimir(mostrar) {        //Funcion callback: funcion que se pasa como un argumento, y que luego se le manda a llamar.
    console.log("Resultado: " + mostrar);
}

sumar(4, 6, imprimir);