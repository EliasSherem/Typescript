"use strict";
const persona = {
    nombre: 'Juan',
    birthYear: 1990,
    ciudad: 'Madrid'
};
function calcularEdad(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}
console.log(`La edad de ${persona.nombre} es ${calcularEdad(persona.birthYear)} años.`);
