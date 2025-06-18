# Avatar: La Leyenda de Aang - Juego Web

Este proyecto es un juego web inspirado en Avatar: La Leyenda de Aang. El usuario elige un personaje y un ataque para enfrentarse a un enemigo, todo gestionado desde el navegador.

## ¿Qué es el DOM?
El DOM (Document Object Model) es la estructura que representa los elementos de una página web. Permite manipular el contenido y la apariencia de la página usando JavaScript.

## Estructura del proyecto
- **HTML:** Define la estructura y los elementos del juego.
- **CSS:** Aplica un estilo visual inspirado en la naturaleza y la cultura ancestral de Avatar.
- **JavaScript:** Controla la lógica del juego, la selección de personajes y ataques, y la interacción con el DOM.

## Funcionalidades principales
- Selección de personaje por el usuario.
- Selección aleatoria del personaje enemigo por la PC.
- Visualización de ambos personajes y sus vidas.
- Botones para elegir ataques elementales.
- Mensajes dinámicos según el resultado de los ataques.
- Botón para reiniciar la partida.

## Cómo jugar
1. Selecciona tu personaje y haz clic en "Seleccionar".
2. El sistema mostrará tu personaje y el del enemigo.
3. Elige un ataque y observa el resultado.
4. Reinicia la partida cuando lo desees.

## Reglas del juego:
   - Tanto tú como el enemigo tienen **3 vidas**.
   - Ganas o pierdes vidas dependiendo del resultado de cada ataque.
   - Los ataques posibles son:
     - 👊 Puño
     - 🦶 Patada
     - 🦵 Barrida

## Lógica de combate:
   El juego funciona con una lógica tipo "piedra, papel o tijera":
   - **Puño gana a Barrida**
   - **Patada gana a Puño**
   - **Barrida gana a Patada**
   - Si ambos atacan con el mismo movimiento, es un **EMPATE**

   ## Fin del juego:
   - El primero en perder las 3 vidas **pierde la partida**.
   - Puedes reiniciar la partida en cualquier momento con el botón **Reiniciar**.
---