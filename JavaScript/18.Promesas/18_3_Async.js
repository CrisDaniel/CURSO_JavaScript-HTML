//async indica que la funcion regresa una promesa;

async function funcionConPromesa(num){
    return "Retorna una promesa con async " + num;
}

funcionConPromesa(10).then(valor => console.log(valor));