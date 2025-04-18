"use strict";
const boton = document.getElementById("enviar");
const nombre = document.getElementById("nombre");
boton.addEventListener("click", () => {
    console.log(nombre.value);
});
