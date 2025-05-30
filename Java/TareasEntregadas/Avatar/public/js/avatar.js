function iniciarjuego() {
    let botonPersonajeJugador = document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);
}

function seleccionarPersonajeJugador() {
    let SpanPersonajeJugador = document.getElementById('personaje-jugador');
    const personajes = ['zuko', 'katara', 'aang', 'toph'];
    for (let id of personajes) {
        if (document.getElementById(id).checked) {
            SpanPersonajeJugador.innerText = id.charAt(0).toUpperCase() + id.slice(1);
            seleccionarPersonajeEnemigo(); // Llama aquí para mostrar el enemigo
            return;
        }
    }
    alert("Por favor selecciona un personaje");
}

function seleccionarPersonajeEnemigo() {
    let SpanPersonajeEnemigo = document.getElementById('personaje-enemigo');
    const personajes = ['zuko', 'katara', 'aang', 'toph'];
    const indiceAleatorio = Math.floor(Math.random() * personajes.length);
    const personajeEnemigo = personajes[indiceAleatorio];
    SpanPersonajeEnemigo.innerText = personajeEnemigo.charAt(0).toUpperCase() + personajeEnemigo.slice(1);
}




window.addEventListener('load', iniciarjuego);