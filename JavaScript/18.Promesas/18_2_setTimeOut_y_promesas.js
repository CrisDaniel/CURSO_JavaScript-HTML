let promesa = new Promise( (resolve) => {
    console.log("Inicio de promesa");
    setTimeout( () => resolve("Exito en 5 seg"),   5000);
    console.log("Fin de promesa");
});

promesa.then(valor =>console.log(valor));