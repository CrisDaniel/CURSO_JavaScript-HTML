//Get = Obtener.
//Set = Modificar/establecer.

//Si se quiere obtener el valor de un set(modificar), tiene que tener un get(obtener);El set no devuelve el valor solo modifica.
let mascota = {
    nombre: "Draco",
    especie: "Iguana",
    color: "Verde",
    edad: 2,
    tipo: "Reptil",
    tamaño: 32,
    set tamIguana(cm){
        this.tamaño = cm;
    },
    get tamIguana(){
        return this.tamaño;
    },
    get caracteristicaCompleta(){
        return this.nombre + " es una " + this.especie + " " + this.color + " de " + this.edad + " años (" + this.tipo + ").";
    }
}

console.log(mascota.caracteristicaCompleta);
mascota.tamIguana = 45;
console.log(mascota.tamIguana);
console.log(mascota.tamaño);