class Producto{

    static contadorProductos = 1;

    constructor(nombre, precio){
        this.idProducto = Producto.contadorProductos++;
        this.nombre = nombre;
        this.precio = precio;
    }

    get obteneridProducto(){
        return this.idProducto;
    }

    get obtenerNombre(){
        return this.nombre;
    }
    set modificarNombre(nombre){
        this.nombre = nombre;
    }

    get obtenerPrecio(){
        return this.precio;
    }
    set modificarPrecio(precio){
        this.precio = precio;
    }

    toString(){
        return this.idProducto + ": " + this.nombre + " .s/" + this.precio;
    }

}
console.log("Productos:");

let producto1 = new Producto("Leche", 5);
console.log(producto1.toString());

let producto2 = new Producto("Arroz", 2.30);
console.log(producto2.toString());

let producto3 = new Producto("Azucar", 5.20);
console.log(producto3.toString());

let producto4 = new Producto("Donofrio", 2.50);
console.log(producto4.toString());

class Orden{

    static contadorOrdenes = 0;
    
    static get limiteProductos(){
        return 5;
    }
    
    constructor(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.productos = [];
        this.contadorProductosAgregados = 0;
    }

    get obtenerIdOrden(){
        return this.idOrden;
    }
    
    agregarProducto (producto){
        if(this.productos.length <Orden.limiteProductos){
            this.productos.push(producto);
        }else{
            console.log(`Excedio el limite de productos (${Orden.limiteProductos}) en la orden N°${this.idOrden}.\n`);
        }
    }

    mostrarArray(){
        console.log(this.productos.length);
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let produc of this.productos){
            totalVenta +=  produc.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productoOrden = "";
        for(let producto of this.productos){
            productoOrden += producto.toString() + "\n";
        }
        console.log("Orden N° " + this.idOrden +": Total("+ this.calcularTotal()+ ")\n" + productoOrden);
    }

}

console.log("\nOrdenes:\n");

let orden1 = new Orden();   //Creamos un 4 objetos de tipo Orden para tener 4 ordenes de productos.
let orden2 = new Orden();
let orden3 = new Orden();
let orden4 = new Orden();
let orden5 = new Orden();


orden1.agregarProducto(producto1);  //Agregamos los productos a cada orden.
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto1);

orden2.agregarProducto(producto1);
orden3.agregarProducto(producto3);
orden4.agregarProducto(producto3);
orden4.agregarProducto(producto4);

orden5.agregarProducto(producto2);
orden5.agregarProducto(producto1);
orden5.agregarProducto(producto3);
orden5.agregarProducto(producto4);
orden5.agregarProducto(producto2);
orden5.agregarProducto(producto1);

orden1.mostrarOrden();              //Mostramos las ordenes.
orden2.mostrarOrden();
orden3.mostrarOrden();
orden4.mostrarOrden();
orden5.mostrarOrden();