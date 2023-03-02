const ingresos = [
    new Ingreso("Salario", 3000),
    new Ingreso("Empresa", 6000),
    new Ingreso("sueldo", 5000)
];

const egresos = [
    new Egreso("Luz", 1540),
    new Egreso("Comida", 1000),
    new Egreso("Salida", 1507)
];

let cargarApp = () => {
    cargarCabezero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor;
        console.log(ingreso.valor);
    }

    return totalIngreso;
}

let totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso.valor;
    }

    return totalEgreso;
}

let cargarCabezero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
}

let formatoMoneda = (valor) => {
    return valor.toLocaleString('es-PE',{style:'currency', currency: 'PEN', minimumFractionDigits: 2})
}

let formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-PE', {style: 'percent', minimumFractionDigits: 2});
}

const cargarIngresos = () =>{
    let ingresosHTML = "";
    for (let ingreso of ingresos) {
        ingresosHTML = ingresosHTML + crearIngresoHTML(ingreso);
    }

    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso) => {
    let ingresosHTML =`
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-outline"
                    onclick='eliminarIngreso(${ingreso.idIngresos})'></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return ingresosHTML;
}

const eliminarIngreso = (idIngresos) => {
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.idIngresos == idIngresos);
    ingresos.splice(indiceEliminar,1);
    cargarCabezero();
    cargarIngresos();
}

const cargarEgresos = () => {
    let egresosHTML = '';
    for (let egreso of egresos) {
        egresosHTML += crearEgresosHTML(egreso);
    }

    document.getElementById("lista-egresos").innerHTML = egresosHTML;
}

const crearEgresosHTML = (egreso) => {
    let egresosHTML =`
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalIngresos())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-outline"
                    onclick='eliminarEgreso(${egreso.idEgreso})'></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return egresosHTML;
}

const eliminarEgreso = (idEgresos) => {
    let indiceEliminar = egresos.findIndex(egreso => egreso.idEgreso == idEgresos);
    egresos.splice(indiceEliminar,1);
    cargarCabezero();
    cargarEgresos();
}

let agregarDato = () => {
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];

    if(descripcion.value !== '' && valor.value !=='') {
        if(tipo.value == 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, +valor.value)); //El + convierte el stringt valor.value en numerico
            cargarCabezero();
            cargarIngresos();
        }
        else if(tipo.value == 'egreso'){
            egresos.push(new Egreso(descripcion.value, +valor.value)); //El + convierte el stringt valor.value en numerico
            cargarCabezero();
            cargarEgresos();
        }
    }
}