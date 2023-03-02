//Si un niño le dice a su padre que valla a su juego de futbol, pero el padre puede asistir si tiene un dia de dezcanso o tenga vacaciones

console.log(ternario(false, true));
console.log(elNumeroEsPar_Impar(36));

function ternario(dezcanso, vacaciones){
    respuesta = dezcanso || vacaciones ? "El padre asistira al juego de su hijo" : "El padre esta ocupado";
    return respuesta;
}

function elNumeroEsPar_Impar(numero){
    resultado = numero % 2 ==0 ? "El numero es PAR" : "El numero es IMPAR";
    return resultado;
}