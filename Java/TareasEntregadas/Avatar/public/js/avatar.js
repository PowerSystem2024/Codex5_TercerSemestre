let ataqueJugador
let ataqueEnemigo

function iniciarjuego() {
    let botonPersonajeJugador = document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);
    
    let botonPunio = document.getElementById('boton-punio')
    botonPunio.addEventListener('click', ataquePunio)
    let botonPatada = document.getElementById('boton-patada')
    botonPatada.addEventListener('click', ataquePatada)
    let botonBarrida = document.getElementById('boton-barrida')
    botonBarrida.addEventListener('click', ataqueBarrida)
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

function ataquePunio() {
    ataqueJugador = 'Puño'
    ataqueAleatorioEnemigo()
}

function ataquePatada() {
    ataqueJugador = 'Patada'
    ataqueAleatorioEnemigo()
}

function ataqueBarrida() {
    ataqueJugador = 'Barrida'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = 'Puño'
    }else if(ataqueAleatorio == 2) {
        ataqueEnemigo = 'Patada'
    }else {
        ataqueEnemigo = 'Barrida'
    }
}



window.addEventListener('load', iniciarjuego);