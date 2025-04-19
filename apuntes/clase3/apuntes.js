"use strict";
//interfaces
const producto1 = {
    nombre: 'Camiseta',
    precio: 20,
    hasDiscount: true,
    showPrecio: (tax) => 20 * tax,
};
const playera1 = {
    nombre: 'Playera',
    precio: 25,
    hasDiscount: false,
    talla: 'M',
    color: 'Rojo',
    showPrecio: (tax) => 25 * tax,
};
//clases
class Camiseta {
    constructor(nombre, precio, hasDiscount) {
        this.nombre = nombre;
        this.precio = precio;
        this.hasDiscount = hasDiscount;
    }
    showPrecio(tax) {
        return this.precio * tax;
    }
}
