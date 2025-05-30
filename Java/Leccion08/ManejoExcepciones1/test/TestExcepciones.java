package ManejoExcepciones1.test;

import  static ManejoExcepciones1.aritmetica.Aritmetica.divison;
import ManejoExcepciones1.excepciones.OperacionExcepcion;

public class TestExcepciones {
    public static void main(String[] args) {
        int resultado = 0;
        try {
            resultado = divison(10, 0);
        }catch(OperacionExcepcion e){
            System.out.println("Ocurrio un error de tipo OperacionExcepcion");
            System.out.println(e.getMessage());
        }catch (Exception e) {
            System.out.println("Ocurrio un error");
            e.printStackTrace(System.out); //se conoce como pila de excepciones
            System.out.println(e.getMessage());
        }
        finally{
            System.out.println("Se reviso la division entre cero");
        }
        System.out.println("La variable de resultado tiene como valor "+resultado);
    }
    
}
