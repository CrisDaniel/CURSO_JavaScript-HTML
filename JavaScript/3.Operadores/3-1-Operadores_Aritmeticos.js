// + => Adicion
// - => Substraccion
// * => Multiplicacion
// ** => Exponenciacion
// "/" => Division
// % => Modulo
// ++ => Incremento
// -- => Decremento

let a,b,z;
a = 3;
b = 2;
z = a + b;
console.log("Resultado de la suma = " + z);

z = a - b;
console.log("Resultado de la resta = " + z);

z = a * b;
console.log("Resultado de la multiplicacion = " + z);

z = a/b;
console.log("Resultado de la division = " + z);

z = a % b;
console.log("Resultado de la operacion modulo = " + z);

z = a ** b;
console.log("Resultado de la esponenciacion = " + z);

//Incremento
//Pre-Incremento (El operador ++ antes de la variable)

z = ++a;
console.log(a); // Primero incrementa el valor de a // a = 4
console.log(z); // Despues del incremento, el valor de z es el valor de a // z = 4

//Post-Incremento (El operador ++ despues de la variable)

z = b++;
console.log(z); // Primero se le asigna el valor de b a z // z = 2
console.log(b); // Despues de asignar el valor, b incrementa // b = 3

//Dcremento
//Predecremento

let m,n;
m = 5;

z = --m;
console.log(m); //Primero decrementa el valor de m // m = 4
console.log(z); // Despues el valor de m es asignado a z // z = 4

console.log("");
//Posdecremento

z = m--;
console.log(z); // Primero el valor de m es asignado a z // z = 4
console.log(m); // Despues sucede el incremento // m = 3
