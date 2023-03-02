const mostrarReloj = ()=>{
    let date = new Date();

    let año = Intl.DateTimeFormat('es', {year: 'numeric'}).format(date);
    let mes = Intl.DateTimeFormat('es', {month: 'long'}).format(date);
    let diaMes = Intl.DateTimeFormat('es', {day: '2-digit'}).format(date);
    let diaSemana = Intl.DateTimeFormat('es', {weekday: 'long'}).format(date);
    
    //Formato numerico en la hora

    let hora = agregarCero(date.getHours());
    let minutos = agregarCero(date.getMinutes());
    let segundos = agregarCero(date.getSeconds());
    
    function agregarCero(tiempoNumerico){
        if(tiempoNumerico < 10){
            tiempoNumerico = '0' + tiempoNumerico;
        }
    
        console.log(tiempoNumerico);
    
        return tiempoNumerico;
    }

    let fecha = diaSemana + " " + diaMes + " " + mes + " " + año;
    let reloj = hora + " : " + minutos + " : " + segundos;
    
    document.getElementById("fecha").innerHTML = fecha;
    document.getElementById("hora").innerHTML = reloj;
    
    //classList: Recupera toda las clases de tipo css que se aplicara al elemento html
    //toggle: Si esta agregado la clase (aplicado el estilo css) lo quita y si no hay lo agrega.
    // Como un interruptor funciona el toggle.
    document.getElementById('contenedor').classList.toggle('animar')
    
}

setInterval(mostrarReloj, 1000);