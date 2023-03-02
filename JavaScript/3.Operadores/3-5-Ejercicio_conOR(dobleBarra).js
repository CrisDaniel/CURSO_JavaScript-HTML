//Si un niño le dice a su padre que valla a su juego de futbol, pero el padre puede asistir si tiene un dia de dezcanso o tenga vacaciones

asistenciaAlJuego(false, true);

function asistenciaAlJuego(dezcanso, vacaciones) {
    if (dezcanso || vacaciones) {
        console.log("El padre puede asistir al juego de su hijo.")
    } else {
        console.log("El padre esta ocupado.")
    }
}