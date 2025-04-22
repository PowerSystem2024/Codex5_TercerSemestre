class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }

    mostrarDetalle() {
        return `Tipo: ${this.tipoEntrada}, Marca: ${this.marca}`;
    }
}

class Raton extends DispositivoEntrada {
    constructor(marca) {
        super("USB", marca);
    }

    mostrarDetalle() {
        return `Raton -> ${super.mostrarDetalle()}`;
    }
}

class Teclado extends DispositivoEntrada {
    constructor(marca) {
        super("USB", marca);
    }

    mostrarDetalle() {
        return `Teclado -> ${super.mostrarDetalle()}`;
    }
}

class Monitor {
    constructor(marca, tamaño) {
        this.marca = marca;
        this.tamaño = tamaño;
    }

    mostrarDetalle() {
        return `Monitor -> Marca: ${this.marca}, Tamaño: ${this.tamaño}"`;
    }
}

class Computadora {
    constructor(nombre, monitor, teclado, raton) {
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
    }

    mostrarDetalle() {
        return `
Computadora: ${this.nombre}
${this.monitor.mostrarDetalle()}
${this.teclado.mostrarDetalle()}
${this.raton.mostrarDetalle()}
        `;
    }
}

class Orden {
    constructor() {
        this.computadoras = [];
    }

    agregarComputadora(computadora) {
        this.computadoras.push(computadora);
    }

    mostrarOrden() {
        let detalles = this.computadoras.map(comp => comp.mostrarDetalle()).join('\n');
        console.log(`Orden con ${this.computadoras.length} computadoras:\n${detalles}`);
    }
}

// Prueba
const raton1 = new Raton("Logitech");
const teclado1 = new Teclado("Razer");
const monitor1 = new Monitor("Samsung", 24);
const compu1 = new Computadora("GamerX", monitor1, teclado1, raton1);

const orden1 = new Orden();
orden1.agregarComputadora(compu1);
orden1.mostrarOrden();
