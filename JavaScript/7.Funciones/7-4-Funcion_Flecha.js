//Funcion normal

function suma(m ,n) {   //Parametros: Variables declaradas en las funciones, que recibiran valores.
    console.log(m-n);
}

let total = suma(9,7); //Argumentos: Valores que enviamos a la funcion

//Funcion flecha

let funcionFlecha = (x, y) => ("La suma es: " + (x + y));
var resultado = funcionFlecha(10, 45);
console.log(resultado);