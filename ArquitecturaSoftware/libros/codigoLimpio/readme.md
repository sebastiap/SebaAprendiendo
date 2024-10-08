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
 * La ley de Demeter : Cada unidad debe tener un limitado conocimiento sobre otras unidades y solo conocer y hablar con aquellas unidades estrechamente relacionadas.
 * Uso de DTO : Clases con variables publicas y sin funciones para administrar la tranferencia de datos.
  
## Manejo de Errores
* Como se menciono previamente en el modulo funciones, se refuerza que es conveniente usar excepciones en lugar de codigos de error para tratar situaciones.
* Escribi tu modulo try-catch antes que nada.
* Utilizar excepciones no checkeadas (Fallan en tiempo de ejecucion), para evitar romper el principio de Abierto Cerrado tener que preparar a los metodos para los throws de sus hijos.
* Dar contexto con las excepciones.
* Las excepciones deben ser informativas para quien la llama.
* Defini el flujo normal de la aplicacion
* Evita en lo posible pasar null o devolver null. Esto nos hace propenso a errores.

## Limites
* Aprender a usar codigo de terceros. Como usuario buscamos ganar tiempo y usar lo justo y necesario.
* Aprender log4j
* Escribir los test de las APIS ya que no solo aprendemos a pegarle a los endpoints si no que nos ayudan a entender.
* Limites claros: Las partes del codigo que interactuan con terceros estan bien identificadas para facilitar los cambios y extension.

## Test
* Las 3 leyes del Test Driven development:
  -Primera Ley: No debes escribir codigo productivo hasta que hayas escrito escrito una prueba unitaria fallida.
  -Segunda ley: No puedes escribir más pruebas unitarias de las que sean suficientes para fallar, y no compilarlas es fallar.
  -Tercera ley: No puedes escribir más código de producción del suficiente para pasar la prueba actualmente fallida.
* Mantener los test prolijos.
* Cuanto mayor sea la cobertura de su prueba, menos tu miedo a cambiar el codigo.
* Doble estándar: El código dentro de la API de prueba tiene un conjunto de estándares de ingeniería diferente al código de producción. Debe seguir siendo simple, conciso y expresivo, pero no necesita ser tan eficiente como
código de producción.
* Un Assert por test.
* Un concepto por test.
* Siguen las reglas F.I.R.S.T. :
  - Fast
  - Independientes
  - Repetibles
  - Self-Validating
  - Timely (Hecho al mismo tiempo que el codigo que prueban)
 
## Diseño Emergente
Debe seguir estas 4 reglas:
 * Siempre correr todos los tests
 * Refactoring para que no haya duplicados
 * Refactoring para mejorar la expresividad
 * Refactoring para mantener la menor cantidad de clases y metodos.

## Code smells 
Son partes del codigo que si bien no son errores... "huelen mal".
* Comentarios:
  - Informacion inadecuada (Informacion que deberia esta en el repositorio o manejador de versiones)
  - Comentarios Obsoletos (Desactualizada, Redundante, dificil de mantener)
  - Comentarios Redundantes
  - Comentarios mal escritos
  - Codigo comentado
* Ambiente:
  - Contruir requiere mas de un paso (Deberia ser lo mas sencillo posible)
  - El Test requiere mas de un paso (Deberia ser lo mas sencillo posible)
* Funciones:
  - Demasiados argumentos
  - Argumentos de Salida
  - Argumentos bandera
  - Funciones que nunca se usan
* General
  - Mas de un lenguaje en un mismo archivo.
  - La respuesta obvia no esta implementada.
  - Comportamientos incorrecto en los bordes.
  - Tests,funcionalidades y pruebas fallidad desabilitadas.
  - Duplicacion.
  - Codigo al nivel equivocado de abstraccion.
  - Clases bases depende de sus derivados.
  - Demasiadas interfaces.
  - Codigo muerto: codigo que no se ejecuta.
  - Separacion vertical: Las variables deberian ir cerca de donde se usan.
  - Inconsistencia : Resolver el mismo problema de distintas maneras.
  - Desorden.
  - Acoples Artificiales o innecesarios
  - Feature Envy: Las clases deben estar interesadas en sus propias variables y metodos, no en la de los demas.
  - Condicionales como Argumentos
  - Intenciones ocultas
  - Responsabilidades mal asignadas
  - Funciones estaticas innecesarias
  - Usar variables explicatorias
  - Funciones o variables que no son claras en lo que hacen.
  - No entender el algoritmo.
  -  Make Logical Dependencies Physical...................................298
  -  Usar condicionales en lugar de polimorfismo.
  -  No seguir convenciones estandar.
  -  Utilizar "numeros magicos" en lugar de CONSTANTES con nombres descriptivos.
  -  Ser poco preciso.
  -  Structure over Convention
  -  No Encapsular Conditionales.
  - Usar conditionales negativos.
  - Las funciones deben hacer una sola cosa.
  - Esconder acoples temporales.
  - Tomar decisiones arbitrarias.
  - Encapsular condiciones limites (cuando una variable tiene un +1 o un incremental es mejor encapsular en una variable)
  - Las funciones deberian descender solo un nivel de abstraccion
  - Mantener la configuracion a simple vista
  - Navegacion Transitiva (No seguir la Ley de Demeter)
