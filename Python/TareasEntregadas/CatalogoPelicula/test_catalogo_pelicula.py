from dominio.pelicula import Pelicula
from servicio.catalogo_pelicula import CatalogoPeliculas

def mostrar_menu():
    opcion = -1
    while opcion != 4:
        print("\nMenú de catálogo de películas:")
        print("1. Agregar película")
        print("2. Listar películas")
        print("3. Eliminar archivo de películas")
        print("4. Salir")

        try:
            opcion = int(input("Selecciona una opción: "))
            if opcion == 1:
                nombre = input("Nombre de la película: ")
                pelicula = Pelicula(nombre)
                CatalogoPeliculas.agregar_pelicula(pelicula)
            elif opcion == 2:
                CatalogoPeliculas.listar_peliculas()
            elif opcion == 3:
                CatalogoPeliculas.eliminar()
            elif opcion == 4:
                print("¡Hasta luego!")
            else:
                print("Opción inválida.")
        except ValueError:
            print("Por favor, ingresa un número válido.")

if __name__ == "__main__":
    mostrar_menu()
