let mes = "prueba";
let estacion = "No asignado";

verificarEstacion(mes);

function verificarEstacion (mes){

    switch (mes) {
        case 1: case 2: case 12:
            estacion = "Invierno";
            break;
        case 3: case 4: case 5:
            estacion = "Primavera";
            break;
        case 6: case 7: case 8:
            estacion = "Verano";
        case 9: case 10: case 11:
            estacion = "Otoño";
            break;
        case "prueba":
            console.log("Imprime string");
            break;
        default:
            estacion = "Valor incorrecto"
            break;
    }
    console.log(estacion);
}