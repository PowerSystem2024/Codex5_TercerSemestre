
package mundopc;
import ar.com.system2023.mundopc.*;

public class mundoPC {
    public static void main(String[] args) {
        Monitor monitorHP = new Monitor("HP", 13); //Importar la clase
        Teclado tecladoHP = new Teclado("Bluetooth", "HP");
        Raton ratonHP = new Raton("Bluetooth", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);
        
        //Creamos otros objetos de diferente marca
        Monitor monitorGamer = new Monitor("Gamer", 32);
        Teclado tecladoGamer = new Teclado("Bluetooth", "Gamer");
        Raton ratonGamer = new Raton("Bluetooth", "Gamer");
        Computadora computadoraGamer = new Computadora("Computadora Gamer" ,monitorGamer, tecladoGamer, ratonGamer);
        Orden orden1 = new Orden(); //Inicializamos el arreglo vacio
        Orden orden2 = new Orden(); //Una nueva lista para el objeto orden2 
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraGamer);
        
        Computadora computadoraVarias = new Computadora("Computadora de diferentes marcas", monitorHP, tecladoGamer, ratonHP);
        orden2.agregarComputadora(computadoraVarias);
        
        orden1.mostrarorden();
        orden2.mostrarorden();
        
        //Crear mas objetos de tipo computadora con todos sus elementos
        //Completar una lista en el objeto orden1 que llegue a los 10 elementos
        //Proar de esta manera los metodos al  maximo rendimiento
        
        //Crear más objetos computadora
        Computadora comp1 = new Computadora("Comp1", new Monitor("Dell", 24), new Teclado("USB", "Dell"), new Raton("USB", "Dell"));
        Computadora comp2 = new Computadora("Comp2", new Monitor("Lenovo", 27), new Teclado("Bluetooth", "Lenovo"), new Raton("Bluetooth", "Lenovo"));
        Computadora comp3 = new Computadora("Comp3", new Monitor("Acer", 22), new Teclado("USB", "Acer"), new Raton("USB", "Acer"));
        Computadora comp4 = new Computadora("Comp4", new Monitor("Asus", 28), new Teclado("Bluetooth", "Asus"), new Raton("Bluetooth", "Asus"));
        Computadora comp5 = new Computadora("Comp5", new Monitor("MSI", 31), new Teclado("USB", "MSI"), new Raton("USB", "MSI"));
        Computadora comp6 = new Computadora("Comp6", new Monitor("Samsung", 26), new Teclado("Bluetooth", "Samsung"), new Raton("Bluetooth", "Samsung"));
        Computadora comp7 = new Computadora("Comp7", new Monitor("LG", 25), new Teclado("USB", "LG"), new Raton("USB", "LG"));
        Computadora comp8 = new Computadora("Comp8", new Monitor("Alienware", 34), new Teclado("Bluetooth", "Alienware"), new Raton("Bluetooth", "Alienware"));

        // Agregar hasta 10 computadoras en orden1
        orden1.agregarComputadora(comp1);
        orden1.agregarComputadora(comp2);
        orden1.agregarComputadora(comp3);
        orden1.agregarComputadora(comp4);
        orden1.agregarComputadora(comp5);
        orden1.agregarComputadora(comp6);
        orden1.agregarComputadora(comp7);
        orden1.agregarComputadora(comp8);

        // Mostrar las órdenes
        orden1.mostrarorden();
        orden2.mostrarorden();
    }
   
}
