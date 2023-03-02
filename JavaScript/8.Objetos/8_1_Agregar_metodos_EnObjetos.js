let mascota = {
    nombre: "Draco",
    especie: "Iguana",
    color: "Verde",
    edad: 2,
    tipo: "Reptil",
    caracteristicaCompleta: function(){
        return this.nombre + " es una " + this.especie + " " + this.color + " de " + this.edad + " años (" + this.tipo + ").";
    }
}

console.log(mascota.caracteristicaCompleta());