function crearReloj (){
    let date = new Date();
    let HORA = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();

    //document.getElementById("reloj"): Este metodo permite obtener toda la linea de codigo con el id = 'reloj'.
    let actualizar = document.getElementById("reloj");

    //Y con innerHTML accedemos al texto que se encuentra en el id = "reloj".
    // Pero como esta linea esta vacia le asignamos el valor de HORA para lograr mostrarlo.
    actualizar.innerHTML = HORA;
}

setInterval(crearReloj, 1000);