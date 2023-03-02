const personas = [
    new Persona("Cristian", "Daniel", 72347847),
    new Persona("Cris", "Alcarraz", 32487334),
    new Persona("Ciel", "Revoredo", 34673478)
];

function mostrarPersonas(){
    let texto = '';
    for(let persona of personas){
        texto += `<li>${persona.nombre} ${persona.apellido} ${persona.dni}</li>`
    }
    
    document.getElementById("persona").innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms["forma"];
    const nombre = forma["nombre"];
    const apellido = forma["apellido"];
    const dni = forma["dni"];

// Si no esta vacio(tiene datos) crea el objeto y lo muestra
    if(nombre.value != "" && apellido.value != "" && dni.value != ""){
        const persona = new Persona(nombre.value, apellido.value, dni.value);
        personas.push(persona);
        mostrarPersonas();
        document.getElementById("mostrarError").innerHTML = "";

    }else{
        document.getElementById("mostrarError").innerHTML = "Falta rellenar datos";
    }

    nombre.value = "";
    apellido.value = "";
    dni.value = "";
}