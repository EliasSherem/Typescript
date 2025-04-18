"use strict";
// Ejercicio1.ts
// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Obtener referencias al botón y al input
    const button = document.getElementById("btn");
    const textInput = document.getElementById("textInput");
    // Verificar que los elementos existen
    if (button && textInput) {
        // Agregar un evento de clic al botón
        button.addEventListener("click", () => {
            // Obtener el valor del input
            const inputValue = textInput.value;
            // Imprimir el valor en la consola
            console.log(inputValue);
        });
    }
    else {
        console.error("No se encontraron los elementos necesarios en el DOM.");
    }
});
function alignHTMLElement(element, alignment) {
    element.style.textAlign = alignment;
}
function calcularPrecioConImpuestos(precio, impuesto = 0.21) {
    return precio + precio * impuesto;
}
function addAllThisNumbers(num1, num2, ...restOfNumbers) {
    return [num1, num2, ...restOfNumbers].reduce((sum, current) => sum + current, 0);
}
function printHumanReadableDate(date) {
    const days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    // Convertir a objeto Date si es un string
    const dateObj = typeof date === "string" ? new Date(date) : date;
    if (isNaN(dateObj.getTime())) {
        throw new Error("Fecha inválida");
    }
    const dayName = days[dateObj.getDay()];
    const day = dateObj.getDate();
    const monthName = months[dateObj.getMonth()];
    return `${dayName.charAt(0).toUpperCase() + dayName.slice(1)}, ${day} de ${monthName}`;
}
