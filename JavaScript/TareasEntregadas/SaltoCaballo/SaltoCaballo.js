// Algoritmo del salto del caballo (tour del caballo) usando backtracking
const N = 8;

// Movimientos posibles del caballo
const movimientosX = [2, 1, -1, -2, -2, -1, 1, 2];
const movimientosY = [1, 2, 2, 1, -1, -2, -2, -1];

// Inicializar el tablero con -1 (sin visitar)
function crearTablero() {
    const tablero = new Array(N);
    for (let i = 0; i < N; i++) {
        tablero[i] = new Array(N).fill(-1);
    }
    return tablero;
}

// Verifica si una posición es válida (dentro del tablero y no visitada)
function esValido(x, y, tablero) {
    return (x >= 0 && x < N && y >= 0 && y < N && tablero[x][y] === -1);
}

// Algoritmo principal de backtracking
function resolverSaltoCaballo(x, y, movimiento, tablero) {
    if (movimiento === N * N) {
        return true;
    }
    for (let i = 0; i < 8; i++) {
        const siguienteX = x + movimientosX[i];
        const siguienteY = y + movimientosY[i];
        if (esValido(siguienteX, siguienteY, tablero)) {
            tablero[siguienteX][siguienteY] = movimiento;
            if (resolverSaltoCaballo(siguienteX, siguienteY, movimiento + 1, tablero)) {
                return true;
            } else {
                // Vuelta atrás
                tablero[siguienteX][siguienteY] = -1;
            }
        }
    }
    return false;
}

// Función para iniciar el algoritmo desde (0,0)
function iniciarTour() {
    const tablero = crearTablero();
    tablero[0][0] = 0;
    if (resolverSaltoCaballo(0, 0, 1, tablero)) {
        imprimirTablero(tablero);
    } else {
        console.log("No se encontró solución.");
    }
}

// Imprimir el tablero en consola
function imprimirTablero(tablero) {
    for (let i = 0; i < N; i++) {
        let fila = "";
        for (let j = 0; j < N; j++) {
            fila += tablero[i][j].toString().padStart(2, "0") + " ";
        }
        console.log(fila);
    }
}

iniciarTour();
