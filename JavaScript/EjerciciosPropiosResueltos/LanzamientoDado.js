/*Escribir un script que simule el lanzamiento de dos dados. Hacer uso de
la función Math.random para obtener números aleatorios entre 1 y 6 para 
cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar 
dos dados y anotar en un array.*/

let lanzamiento = 5;

document.write(suma(lanzamiento));

function suma(lanzamiento){

    var arraySuma = [];
    var resultado = 0;
    
    for (let index = 1; index <= lanzamiento; index++) {
        let dado1 = Math.ceil(Math.random()*6);
        let dado2 = Math.ceil(Math.random()*6);
        resultado = dado1 + dado2;

        document.write("Lanzmiento(" + index + "): " +dado1 + " y " + dado2 + "</br>");
        document.write(resultado + "</br>");
        arraySuma.push(resultado);
    }
    return arraySuma;
}