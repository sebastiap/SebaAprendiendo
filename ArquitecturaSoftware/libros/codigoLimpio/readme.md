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
   - Comentarios informativos cuando el nombre de la funcion no puede aclarar su comportamiento
   - Comentarios dirigidos a ayudar a otro programador o explicar porque se tomo cierto camino o solucion
   - Para clarificar, ya sea un resultado o parametro o bien facilitar la lectura
   - Comentarios TODO
   - Para dar importancia a una porcion de codigo
   - Advertencias
   - En el caso de APIs , los documentos de uson son extremadamente utiles.

### Malos Comentarios
  - Comentarios redundantes
  - Comentarios que "hagan ruido" , distraigan, sean confusos poco claros
  - Comentarios a modo de historial/changelog ( Para eso se utiliza los controladores de versiones)
  - Comentarios redundantes
  - Comentarios que pueden ser reemplazados por un buen nombre de variable o funcion
  - Marcadores de posicion o Titulos de secciones
  - Comentar codigo que deberia borrarse
  - Comentarios referidos a otra seccion de codigo que no esta cerca
  - Comentarios que dan demasiada informacion

## Formateo
 * Legibilidad de Arriba hacia abajo
 * Martener la cercania entre partes del codigo relacionado
 * No hacer separaciones o comentarios que afecten la legibilidad
 * Identar el codigo para agrupar porciones de codigo.
 * Respectar las reglas que establezca el equipo de trabajo

## Objetos y Estructura de Datos
 * Abstraccion de Datos
 * Anti Simetria entre Objetos y Estructura de datos.
      - Los objetos esconden sus datos a traves de abstracciones y exponen sus funciones para tratar los datos.
      - Las estructuras de datos exponen los datos y no tienen funciones significativas
 * 
