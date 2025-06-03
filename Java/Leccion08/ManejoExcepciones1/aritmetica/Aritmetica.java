package ManejoExcepciones1.aritmetica;

import ManejoExcepciones1.excepciones.OperacionExcepcion;


public class Aritmetica {
    public static int divison(int numerador, int denominador) {
        if (denominador == 0) {
            throw new OperacionExcepcion("Division entre cero");
        }
        return numerador / denominador;
    }
}
