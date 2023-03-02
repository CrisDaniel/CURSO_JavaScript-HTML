//Primera forma de crear objetos

let mascota = {
    nombre: "Razor",
    especie: "Pez"
}

console.log(mascota.especie);

//Segunda forma de crear objetos

let amigo = new Object();
amigo.nombre = "Gabriel";
amigo.apellido = "Borja Nieto";
amigo.estado = "Golfa";


//5 formas de imprimir las propiedades de los objetos;
console.log(amigo.nombre + " " + amigo.apellido);
console.log(amigo['nombre'] + mascota['especie'] + "\n");

for (propiedades in mascota) {
    console.log(propiedades + ": " + mascota[propiedades]);
}

let amigoArray = Object.values(amigo);  //Convertimos en un array el objeto amigo.
console.log(amigoArray + "\n");

let amigoString =  JSON.stringify(amigo);   //Convertimos en string el objeto amigo.
console.log(amigoString + "\n")
//Borrar la propiedad de un objeto.

console.log(amigo);
delete amigo.estado;
console.log(amigo)