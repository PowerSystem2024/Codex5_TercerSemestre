
archivo = open(r"C:\Users\Leo\Desktop\3er semestre\Codex5_TercerSemestre\Python\Leccion2\prueba.txt", 'r', encoding='utf8')# Las letras son : 'r'read,'a'append,'w'write,'x'
#print(archivo.read())
#print(archivo.read(16))
#print(archivo.read(10)) # COntinuamos desde la linea anterior
#print(archivo.readline())
#print(archivo.readline())

# Vamos a  iterar el archivo, cada una de las lineas
#for linea in archivo:
    #print(linea): Iteramos todos los elementos del archivo
#print(archivo.readlines()[11]) # Accedemos al archivo como si fuera una lista

# Anexamos informacion. copiamos a otro
archivo2 = open(r"C:\Users\Leo\Desktop\3er semestre\Codex5_TercerSemestre\Python\Leccion2\copia.txt",'w',encoding='utf8')
archivo2.write(archivo.read())
archivo.close() # Cerramos el primer archivo
archivo2.close() # Cerramos el segundo archivo

print("Se ha terminado el proceso de leer y copiar archivos")

