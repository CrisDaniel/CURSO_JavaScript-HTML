let frutaMinuscula = "mandarina";
let frutaMayuscula = "MANDARINA";
let frutaMixta = "MandarinA";
let mismaFruta = "mandarina";

let comparacion = null;

comparacion = frutaMinuscula == frutaMayuscula; //False
console.log(comparacion);

comparacion = frutaMinuscula == frutaMixta; //False
console.log(comparacion);

comparacion = frutaMinuscula == mismaFruta; //True
console.log(comparacion);


console.log("Otro ejemplo")

let primerNumero, segundoNumero, comparar;

primerNumero = 7;
segundoNumero = "7";

comparar = primerNumero == segundoNumero; //True
console.log(comparar);

comparar = primerNumero === segundoNumero; //False
console.log(comparar);