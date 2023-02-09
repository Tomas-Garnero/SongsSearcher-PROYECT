import * as UI from "./interfaz.js";
import { API }  from "./api.js"; 

// console.log(UI);

UI.formularioBuscar.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener datos del form
    const artista = document.querySelector("#artista").value,
        cancion = document.querySelector("#cancion").value;

    if(artista === "" || cancion === "") {
        // El usuario dejo al menos un campo vacio, mostrar error
        UI.divMensajes.textContent = "Error... todos los campos son obligatorios";
        UI.divMensajes.classList.add("error");

        setTimeout(() => {
            UI.divMensajes.textContent = "";
            UI.divMensajes.classList.remove("error");
        }, 3000);

    } else {
        // El formulario esta completo, realizar consulta a la API
        new API(artista, cancion);
    }
})

