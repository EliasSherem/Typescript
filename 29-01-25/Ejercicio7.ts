const boton = document.getElementById("enviar") as HTMLButtonElement;
const nombre = document.getElementById("nombre") as HTMLInputElement;
boton.addEventListener("click", () => {
    console.log(nombre.value);
})