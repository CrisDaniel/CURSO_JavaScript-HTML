class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }

    get mostrarTipoEntrada(){
        return this.tipoEntrada;
    }
    set modificarTipoEntrada(tipoEntrada){
        this.tipoEntrada = tipoEntrada;
    }

    get mostrarMarca(){
        return this.marca;
    }
    set modificarMarca(marca){
        this.marca = marca;
    }

    mostrar(){
        return "Tipo de entrada: " + this.tipoEntrada + ", Marca: " + this.marca; 
    }
}

class Mouse extends DispositivoEntrada{

    static contadorMouse = 1;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this.idMouse = Mouse.contadorMouse++;
    }

    get mostrarIdMouse(){
        return this.idMouse;
    }

    toString(){
        return " MOUSE{ Id: " + this.idMouse + ", " + super.mostrar()+"}";
    }
}

class Teclado extends DispositivoEntrada{

    static contadorTeclado = 1;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this.idTeclado = Teclado.contadorTeclado++;
    }

    get mostrarIdTeclado(){
        return this.idTeclado;
    }

    toString(){
        return " TECLADO{ Id: " + this.idTeclado + ", " + super.mostrar() + "}\n";
    }
}

class Monitor{

    static contadorMonitor = 1;

    constructor(marca, tamaño){
        this.idMonitor = Monitor.contadorMonitor++;
        this.marca = marca;
        this.tamaño = tamaño;
    }

    get mostrarIdMonitor(){
        return this.idMonitor;
    }

    get mostrarMarca(){
        return this.marca;
    }
    set modificarMarca(marca){
        this.marca = marca;
    }

    get mostrarTamaño(){
        return this.tamaño;
    }
    set modificarTamaño(tamaño){
        this.tamaño = tamaño;
    }

    toString(){
        return " MONITOR{ Id: " + this.idMonitor + ", Marca: " + this.marca + ", Tamaño: " + this.tamaño + "}\n";
    }
}

class Computadora{

    static contadorComputadora = 1;

    constructor(nombre, monitor, teclado, mouse){
        this.idComputadora = Computadora.contadorComputadora++;
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.mouse = mouse;
    }

    toString(){
        return "COMPUTADORA " + this.idComputadora + ": "+ this.nombre +"\n" + this.monitor +""+ this.teclado + "" + this. mouse+ "\n";
    }
}

class Orden{

    static contadorOrden = 1;

    constructor (){
        this.idOrden = Orden.contadorOrden++;
        this.computadoras = [];
    }

    get obtenerIdOrden(){
        return this.idOrden;
    }

    agregarComputadora(computadora){
        this.computadoras.push(computadora);
    }

    mostrarOrden(){
        let mostrar = "";
        for (let computadora of this.computadoras){
            mostrar = mostrar + computadora;
        }

        console.log("Orden: " + this.idOrden + "\n" +  mostrar);
    }
}

//!CREAR OBJETOS MOUSE, TECLADO Y MONITOR
let mouse1 = new Mouse("USB", "Lenovo");

let teclado1 = new Teclado("Blueetooth", "HP");
let teclado2 = new Teclado("USB", "MAC");

let monitor1 = new Monitor("Lenovo", 25);

//!CREAR OBJETOS TIPO COMPUTADORA
let computadora1 = new Computadora("COMPUTADORA_A", monitor1, teclado1, mouse1);
console.log(computadora1.toString());

let computadora2 = new Computadora("COMPUTADORA_B", monitor1, teclado2, mouse1);
console.log(computadora2.toString())

//!CREAR OBJETOS TIPO ORDEN
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();