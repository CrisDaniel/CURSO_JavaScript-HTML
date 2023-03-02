//! await solo se puede utilizar dentro de una funcion declarada con async

async function funcionConPromesaYAwait(){
    let objetoPromesa = new Promise((resolver) => {
        resolver ("Soy una promesa");
    });

    console.log(await objetoPromesa);
    console.log(objetoPromesa);
}

funcionConPromesaYAwait();