import java.util.Scanner;

public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        while (true) { // Ciclo Infinito
            System.out.println("****** Aplicacion Calculadora ******");
            MostrarMenu();

            try {
                var operacion = Integer.parseInt(entrada.nextLine());

                if (operacion >= 1 && operacion <= 4) {
                    ejecutarOperacion(operacion, entrada);
                } else if (operacion == 5) {
                    System.out.println("Hasta pronto...");
                    break; // Salimos del ciclo infinito
                } else {
                    System.out.println("Opcion erronea: " + operacion);
                }

                // Imprimir un salto de linea antes de repetir el menu
                System.out.println();

            } catch (Exception e) { // Fin del try, comienzo del catch
                System.out.println("Ocurrio un error: " + e.getMessage());
                System.out.println();
            } // Fin del catch
        } // Fin del while
    } // Fin del main

    private static void MostrarMenu() {
        // Mostramos el menu
        System.out.println("""
            1. Suma 
            2. Resta
            3. Multiplicacion
            4. Division
            5. Salir
            """);

        System.out.print("Operacion a realizar?: ");
    } // Fin metodo mostrarMenu

    private static void ejecutarOperacion(int operacion, Scanner entrada) {
        System.out.print("Digite el primer  valor operando1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());

        System.out.print("Digite el segundo  valor operando2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());

        double resultado;

        switch (operacion) {
            case 1 -> {
                resultado = operando1 + operando2;
                System.out.println("El resultado de la suma es: " + resultado);
            }
            case 2 -> {
                resultado = operando1 - operando2;
                System.out.println("El resultado de la resta es: " + resultado);
            }
            case 3 -> {
                resultado = operando1 * operando2;
                System.out.println("El resultado de la multiplicacion es: " + resultado);
            }
            case 4 -> {
                resultado = operando1 / operando2;
                System.out.println("El resultado de la division es: " + resultado);
            }
            default -> System.out.println("Opcion erronea:" + operacion);
        } // Fin del switch
    } // Fin del metodo ejecutarOperacion
} // Fin de la clase
