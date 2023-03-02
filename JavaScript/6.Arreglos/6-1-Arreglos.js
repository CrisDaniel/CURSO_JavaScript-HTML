//Arreglos
//let aves = new Array("Gorrion", "Cisne", "Cuervo", "Halcon"); No recomendable al crear un array

const aves = ["Gorrion", "Cisne", "Cuervo", "Halcon"];
console.log(aves + "\n");

for (let contador =0 ;contador < aves.length; contador++) {
    console.log(contador + 1 + ". " + aves[contador]);
}


aves[1] = "Aguila"; //Modificar el elemento de un array
console.log(aves + "\n");

aves.push("Lechuza");   //Agregar al final un elemento
console.log(aves);

//Preguntamos si es que es un array
if (Array.isArray(aves) == true){
    console.log("Esto es un array.")
} else{
    console.log("Esto no es un array")
}

console.log( aves instanceof Array);    //Preguntamos si la variables auto es una instancia de tipo array.