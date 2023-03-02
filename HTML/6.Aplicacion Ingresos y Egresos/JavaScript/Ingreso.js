class Ingreso extends Dato{

    static contadorIngresos = 1;

    constructor(descripcion, valor){
        super(descripcion, valor)
        this.idIngresos = Ingreso.contadorIngresos++;
    }

    get obtenerIdIngresos (){
        return this.idIngresos;
    }
}