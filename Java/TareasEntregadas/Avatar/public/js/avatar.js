function seleccionarPersonajeJugador() {
    const personajes = ['zuko', 'katara', 'aang', 'toph'];
    for (let id of personajes) {
        if (document.getElementById(id).checked) {
            alert("Seleccionaste al personaje: " + id.charAt(0).toUpperCase() + id.slice(1));
            return;
        }
    }
    alert("Por favor selecciona un personaje");
}

let botonPersonajeJugador = document.getElementById('boton-personaje');
botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);