//Arbol de Navidad

let tamañoArbol = 10;
let caracter = "+";

arbolNavidad(tamañoArbol, caracter);

function arbolNavidad(tamañoArbol, caracter) {

    var arrayAsterisco = [];
    let contador = 1;
    let troncoAsterisco = [];
    let i = 1;

    for (let index = 1; index <= tamañoArbol; index++) {                                                                                             
        if(arrayAsterisco.length == 0){
            while (contador < tamañoArbol) {
                arrayAsterisco.push(" ");
                contador++;
            }
            arrayAsterisco.push(caracter);
        }else{
            arrayAsterisco.push(caracter+caracter);
            arrayAsterisco.shift();
        }
        console.log(arrayAsterisco.join(""));
    }
    
    while(i < arrayAsterisco.length){
        troncoAsterisco.push(" ");
        i++;
    }

    troncoAsterisco.push(caracter);
    console.log(troncoAsterisco.join(""));
}
