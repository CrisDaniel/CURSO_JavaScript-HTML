//Imprimir la tabla del 1 al 12

for (let contadorx= 1; contadorx < 13; contadorx++){
    
    for (let contadory = 0; contadory<13; contadory++) {
        let mul = contadorx * contadory;
        console.log(contadorx.toString()+ " * " + contadory.toString() + " = " + mul);
    }
    console.log("");
}