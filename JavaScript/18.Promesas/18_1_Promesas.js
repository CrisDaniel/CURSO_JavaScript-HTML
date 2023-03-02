let miPromesa = new Promise((resolver,rechazar) => {
    let expresion = false;
    if(expresion){
        resolver("Resuelto con exito.");
    }else{
        rechazar("Se produjo un error.")
    }
});

//miPromesa.then(valor => console.log(valor), error => console.log(error));
miPromesa.then(valor => console.log(valor)).catch(error => console.error("Error", error));