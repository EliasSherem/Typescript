// Ejercicio1.ts

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Obtener referencias al botón y al input
    const button = document.getElementById("btn") as HTMLButtonElement;
    const textInput = document.getElementById("textInput") as HTMLInputElement;

    // Verificar que los elementos existen
    if (button && textInput) {
        // Agregar un evento de clic al botón
        button.addEventListener("click", () => {
            // Obtener el valor del input
            const inputValue = textInput.value;

            // Imprimir el valor en la consola
            console.log(inputValue);
        });
    } else {
        console.error("No se encontraron los elementos necesarios en el DOM.");
    }
});