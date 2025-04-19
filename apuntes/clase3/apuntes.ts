//interfaces

//estructura que tendra un objeto
interface Producto {
    nombre: string;
    readonly precio: number;

    //metodo o funcion
    showPrecio: (tax: number) => number;
}
interface Producto{
    hasDiscount: boolean;
}
const producto1: Producto = {
    nombre: 'Camiseta',
    precio: 20,
    hasDiscount: true,
    showPrecio:(tax)=> 20*tax,
}

//extension de interfaz

interface Playera extends Producto{
    talla?: string;
    color?: string;
}

const playera1: Playera = {
    nombre: 'Playera',
    precio: 25,
    hasDiscount: false,
    talla: 'M',
    color: 'Rojo',
    showPrecio:(tax)=> 25*tax,
}

//clases

class Camiseta implements Producto{
    nombre: string;
    precio: number;
    hasDiscount: boolean;
    constructor(nombre: string, precio: number, hasDiscount: boolean){
        this.nombre = nombre;
        this.precio = precio;
        this.hasDiscount = hasDiscount;
    }
    showPrecio(tax: number): number {
        return this.precio * tax;
    }
}