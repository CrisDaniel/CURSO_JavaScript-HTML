let personaOne = {
    nombre: "Julio",
    apellido: "Lara",
    nombreCompleto: function(profesion, tel){
        return profesion + ": " + this.nombre + " " + this.apellido + " cel: " + tel;
    }
}

let personaTwo = {
    nombre: "Cris",
    apellido: "Revoredo"
}

console.log(personaOne.nombreCompleto("Lin",9365723876));

console.log(personaOne.nombreCompleto.call(personaTwo));

let arreglo = ["ING", 936457849];
console.log(personaOne.nombreCompleto.apply(personaTwo, arreglo));