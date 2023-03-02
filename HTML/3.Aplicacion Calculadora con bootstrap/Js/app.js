function sumar(){
    //Tambien se puede acceder directamente a alos input a traves de su id=""
    //let operandoA = parseInt(document.getElementById("operandoA").value);
    //let operandoB = parseInt(document.getElementById("opernadoB").value);

    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"].value;
    let operandoB = forma["operandoB"].value;

    let resultado = parseInt(operandoA) + parseInt(operandoB);
    if(isNaN(resultado)){
        resultado = "No ingreso los operandos"
    }
    document.getElementById("resultado").innerHTML= `Resultado: ${resultado}`;
}