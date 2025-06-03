function torresDeHanoi(n, origen, destino, auxiliar) {
  if (n === 1) {
    console.log(`Mover disco 1 de ${origen} a ${destino}`);
    return;
  }

  // Mover n-1 discos del origen al auxiliar
  torresDeHanoi(n - 1, origen, auxiliar, destino);

  // Mover el disco restante al destino
  console.log(`Mover disco ${n} de ${origen} a ${destino}`);

  // Mover los n-1 discos del auxiliar al destino
  torresDeHanoi(n - 1, auxiliar, destino, origen);
}

// Ejemplo de ejecución con 3 discos
const numeroDeDiscos = 3;
torresDeHanoi(numeroDeDiscos, 'A', 'C', 'B');
