/*  1.)Crear una expresión regular valide una fecha en formato "XX/XX/XXXX", donde "X" es un dígito.
Probarlo con la expresión: "Nací el 05/04/1982 en Donostia."*/

let expresion = /\d{2}\/\d{2}\/\d{4}/;
let cadena = "Nací el 05/04/1982 en Donostia.";
let resultado = expresion.test(cadena);
console.log(resultado);

/*  2.)Crear una expresión regular que valide una dirección de email. Para simplificar, los valores antes de la @ pueden 
contener cualquier carácter alfanumérico, y los caracteres . y -, mientras que los valores tra la @ pueden contener 
caracteres alfanuméricos, y el tipo de dominio puede tener una longitud de 2 o 3 caracteres.*/

let expresionParaGmail = /^[a-zA-Z0-9-.]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]{2,3})$/;
let gmail = "daniel981311@gmail.com";
let resp = expresionParaGmail.test(gmail);
console.log(resp);

/*--------(?:\.[a-zA-Z0-9-]{2,3})--------
La expresión (?:) es un grupo sin captura, que permite agrupar una expresión sin que se guarde como una captura.
La expresión \. valida que haya un punto.
La expresión [a-zA-Z0-9-]{2,3} valida que haya dos o tres caracteres alfanuméricos o guiones.
La expresion (^) indica el inicio y el ($) indica el final. */






var datosAleatorios = "015 354 8787 687351 3512 8735";
var regexpCuatroDigitos = /\b\d{4}\b/g;
// \b indica un límite (es decir, no empieza a coincidir en medio de una palabra)
// \d{4} indica un dígito, cuatro veces
// \b indica otro límite (es decir, no termina la coincidencia en medio de una palabra)


console.table(datosAleatorios.match(regexpCuatroDigitos));
// ['8787', '3512', '8735']