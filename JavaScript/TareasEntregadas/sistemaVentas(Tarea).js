class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
      this._tipoEntrada = tipoEntrada;
      this._marca = marca;
    }

    get tipoEntrada() {
      return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
      this._tipoEntrada = tipoEntrada;
    }

    get marca() {
      return this._marca;
    }

    set marca(marca) {
      this._marca = marca;
    }
  }

  class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
      super(tipoEntrada, marca);
      this._idRaton = ++Raton.contadorRatones;
    }

    toString() {
      return `Raton: [ID: ${this._idRaton}, Tipo: ${this.tipoEntrada}, Marca: ${this.marca}]`;
    }
  }

  class Teclado extends DispositivoEntrada {
    static contadorTeclado = 0;

    constructor(tipoEntrada, marca) {
      super(tipoEntrada, marca);
      this._idTeclado = ++Teclado.contadorTeclado;
    }

    toString() {
      return `Teclado: [ID: ${this._idTeclado}, Tipo: ${this.tipoEntrada}, Marca: ${this.marca}]`;
    }
  }

  class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamano) {
      this._idMonitor = ++Monitor.contadorMonitores;
      this._marca = marca;
      this._tamano = tamano;
    }

    toString() {
      return `Monitor: [ID: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamano}]`;
    }
  }

  class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
      this._idComputadora = ++Computadora.contadorComputadoras;
      this._nombre = nombre;
      this._monitor = monitor;
      this._teclado = teclado;
      this._raton = raton;
    }

    toString() {
      return `Computadora: [ID: ${this._idComputadora}, Nombre: ${this._nombre}]\n  ${this._monitor.toString()}\n  ${this._teclado.toString()}\n  ${this._raton.toString()}`;
    }
  }

  class Orden {
    static contadorOrdenes = 0;

    constructor() {
      this._idOrden = ++Orden.contadorOrdenes;
      this._computadoras = [];
    }

    agregarComputadora(computadora) {
      this._computadoras.push(computadora);
    }

    mostrarOrden() {
      let computadorasStr = '';
      for (let computadora of this._computadoras) {
        computadorasStr += computadora.toString() + '\n';
      }
      return `Orden: [ID: ${this._idOrden}]\n${computadorasStr}`;
    }
  }

  
  let monitor1 = new Monitor("Samsung", "27 pulgadas");
  let teclado1 = new Teclado("USB", "Logitech");
  let raton1 = new Raton("USB", "Logitech");
  
  let computadora1 = new Computadora("PC", monitor1, teclado1, raton1);
  
  let orden1 = new Orden();
  orden1.agregarComputadora(computadora1);
  
  console.log(orden1.mostrarOrden());
