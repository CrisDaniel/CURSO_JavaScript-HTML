async function promesaAsyncAwaitSettimeout(){
    console.log("Inicio de Promesa...");
    let miPromesa = new Promise((resolver) => {
        setTimeout(()=> resolver("Esta promesa se imprimira despues de 5 seg"), 5000);
    });
    console.log(await miPromesa);
    
    //Despues de 5 segundos que se espera para imprimir el objeto promesa, pasa recien a imprimir "Fin de promesa."
    console.log("Fin de promesa.");
}

promesaAsyncAwaitSettimeout();