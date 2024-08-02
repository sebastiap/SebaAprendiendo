# Codigo Limpio

## Resumen de lo que es codigo limpio

En terminos generales, el codigo limpio significa :
 * No hay codigo redundante.
 * El codigo es facil de leer.
 * El codigo expresa claramente lo que hace.
 * Facil de mantener.
 * Respetar los principios SOLID.

## Nombres 

* Usar nombres significativos/descriptivos.
* Evitar confusiones y terminos que puedan dar a una interpretacion erronea.
* Usar nombres distintivos, que permitan diferenciar un objeto de otro y sin palabras redundantes en lo posible.
* Usar nombres pronunciables.
* Usar nombres faciles de buscar.
* Evitar nombres codificados.
* Usar una palabra por concepto a aclarar.
* No innovar, ni querer ser inventivo.
* Usar terminos tecnicos que faciliten la comprension.
* Usar terminos relacionados al negocio.
* Agregar contexto a las variables relacionadas.
* Evitar prefijos, usar escritura estandar segun el objeto para facilitar la lectura:
  - Clases y Objetos - Sustantivos con todas las palabras en mayusculas.
  - Metodos - Verbos o frases verbales
  - 
## Funciones
 * Las funciones deben ser pequeñas.
 * Utilizar identacion para facilitar la legibilidad.
 * Deben estar dedicadas a una sola cosa y hacerla bien.
 * Que manejen un solo nivel de abstraccion.
 * Que sean legibles de arriba hacia abajo.
 * Utilizar Switch aplicando polimorfismo e interfases para abstraerlo y que solo este en un lugar.
 * Que tengan la menor cantidad posible de argumentos. Pueden aceptar Objetos que agrupen varios elementos, pero como un solo parametro.
 * Que no tengan efectos secundarios.
 * No te repitas(DRY)
 * No pases comandos como expresiones(Command Query Separation)
 * Usar excepciones en lugar de codigos de error para tratar situaciones.

## Comentarios
 * Hay que evitarlos en lo posible, si ponemos uno significa que nuestro codigo no se explica por si mismo.
 * Los comentarios no compensan codigo malo
 * Utilizar el codigo para explicarnos (El nombre de una funcion puede ser mas explicativo que unas lineas de codigo sueltas).
 * Algunos comentarios si son buenos o necesarios
### Comentarios Utiles
   - Comentarios legales o del negocio
   - Comentarios informativos cuando el nombre de la funcion no corresponde o no puede aclarar
   - Comentarios dirigidos a ayudar a otro programador o explicar porque se tomo cierto camino o solucion
   - Para clarificar, ya sea un resultado o parametro o bien facilitar la lectura
   - Advertencias
   - Comentarios TODO
   - Para dar importancia a una porcion de codigo
   - En el caso de APIs , los documentos de uson son extremadamente utiles.

### Malos Comentarios
  -
