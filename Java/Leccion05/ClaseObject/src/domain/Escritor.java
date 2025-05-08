package domain;

public class Escritor extends Empleado {
    final TipoEscritura tipoEscritura;


    public Escritor(String nombre, double sueldo, TipoEscritura tipoEscritura) {
        super(nombre, sueldo);
        this.tipoEscritura = tipoEscritura;
    }

    // Método sobreescrito de la clase padre
    @Override
    public String obtenerDetalles() {
        return super.obtenerDetalles() + ", Tipo Escritura: " + tipoEscritura.getDescripcion();
    }

    @Override
    public String toString(){
        return "Escritor{" + "tipoEstructura=" + tipoEscritura + '}'+" "+super.toString();
    }

    public TipoEscritura getTipoEscritura() {
        return this.tipoEscritura;
    }
}
