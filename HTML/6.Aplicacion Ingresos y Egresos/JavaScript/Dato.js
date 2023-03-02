class Dato{
    constructor(descripcion, valor){
        this.descripcion = descripcion;
        this.valor = valor;
    }

    get obtenerDescripcion(){
        return this.descripcion;
    }
    set modificarDescripcion(descripcion){
        this.descripcion = descripcion;
    }

    get obtenerValor(){
        return this.valor;
    }
    set modificarValor(valor){
        this.valor = valor;
    }
}