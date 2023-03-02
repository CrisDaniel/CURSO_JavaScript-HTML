//Hoisting: Podemos definir nuestra funcion en cualquier parte del programa y la podemos mandar a llamar antes
//o despues de definirla.

//Declaracion de una funcion
function miFuncion(h, d){
    return h + d + " estas?"
}

//Llamado de la funcion
let saludo = miFuncion("Hola ", "¿como ");
console.log(saludo);

//console.log(miFuncion(3, 4));     Dos maneras de enviar valores a los parametros. Esta es menos recomendable.


//Declaracion de la funcion tipo de expresion
let sumar = function (a,b) {return a + b}; 
resultado = sumar(1, 9);
console.log(resultado)