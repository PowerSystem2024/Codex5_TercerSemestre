class Empleado {
    constructor(nombre, sueldo) {
        this._nombre = nombre; //Encapsulamineto
        this._sueldo = sueldo; //Encapsulamineto
    }

    obtenerDetalles() {
        return `Empleado: nombre: ${this._nombre},
        Sueldo: ${this._sueldo}`; 
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this._departamento = departamento; //inicialiar
    }

    //Agregamos la sobreescritura
    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles} depto: ${this._departamento};`
    }
}

let gerente1 = new Gerente('Carlos', 5000, 'Sistemas' );
console.log(gerente1); //Objeto de la clase hija

let empleado1 = new Empleado('Pedro', 3500);
console.log(empleado1); //Objeto de la clase padre
