let ataqueJugador
let ataqueEnemigo

function iniciarjuego() {
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
    function reiniciarJuego() {
    location.reload();
    }
    
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

    combate();
}

function combate(){
    //COMBATE
    if (ataqueJugador == ataqueEnemigo) { 
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'Punio' && ataqueEnemigo == 'Barrida') {
        crearMensaje("GANASTE")    
    }else if(ataqueJugador == 'Patada' && ataqueEnemigo == 'Punio'){
        crearMensaje("GANASTE")
    } else if(ataqueJugador == 'Barrida' && ataqueEnemigo == 'Patada') {
        crearMensaje("GANASTE")      
    } else {
        crearMensaje("PERDISTE")       
    }

}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes');
    let parrafo =  document.createElement('p')

    parrafo.innerHTML = 'Tu personaje ataco con ' + ataqueJugador + ', el personaje del enemigo atacó con  ' + ataqueEnemigo + ' ' + resultado

    sectionMensajes.appendChild(parrafo);
}

function aleatorio (min, max){
     return Math.floor(Math.random() * (max - min +1) + min)
}

window.addEventListener('load', iniciarjuego);

// Mostrar/ocultar las reglas del juego
window.addEventListener('load', () => {
    const botonReglas = document.getElementById('boton-reglas');
    const seccionReglas = document.getElementById('seccion-reglas');
    const botonCerrar = document.getElementById('cerrar-reglas');

    botonReglas.addEventListener('click', () => {
        seccionReglas.style.display = seccionReglas.style.display === 'none' ? 'block' : 'none';
    });

    botonCerrar.addEventListener('click', () => {
        seccionReglas.style.display = 'none';
    });
});
