# Conceptos de Arquitectura de Software

## Conceptos Principales

### Ley de Conway
Las organizaciones dedicadas al diseño de sistemas están abocadas a producir diseños que reflejan la cultura organizacional y su forma de comunicarse.


### Habilidades Blandas
* Liderazgo
* Negociacion
* Motivacion

### Desarrollo basado en el dominio
De nada sirve un software si no obedece las reglas del negocio u organizacion para la cual se desarrolla.

## Patrones de Diseño
Un patrón de diseño, es una solución replicable para problemas comunes de desarrollo. 

Los patrones NO son código ya realizado, sino que son descripciones acerca de cómo resolver un problema, y el desarrollador debe corroborar su respectiva implementación en su respectiva tecnología. 
Al ser “descriptivo” un patrón de diseño suele ser subjetivo, por lo que puedes encontrar múltiples aplicaciones. ¡No hay una respuesta absoluta!


## Nociones Basicas para desarrollo de un servidor

### Estructura del codigo
Lo primero que tenemos que contemplar al momento de levantar un proyecto, es tener un enfoque claro de la estructura que tendrá el código. 

Para plantear una estructura, hay que contemplar:

* Tener código reutilizable
* Pensar en código escalable
* Homologación de patrones de diseño

### Código reutilizable
Significa contar con funciones que se puedan reutilizar a lo largo de otras funciones, lo cual nos permite evitar repeticiones de código innecesarias, haciendo el código más legible. Entender una función y reconocerla en diferentes procesos será más fácil de entender para futuros desarrolladores. 

### Código escalable
Puede llevar un tiempo adicional el hacer un método “genérico”, pero nos puede ayudar bastante posteriormente para no tener que pensar en reajustes complejos para cada caso nuevo en el futuro. Ademas, nos permite que cada funcion tenga un objetivo claro.

### Homologación de patrones de diseño
Acordar con el equipo de trabajo los patrones de diseño que se están utilizando. Esto hace que el nuevo desarrollador no entienda los modelos de trabajo principales que utilizamos para la aplicación.
Contar con una lista clara y ejemplos de los patrones que están implementándose, permitirán que el desarrollador se acostumbre más fácilmente a los modelos de trabajo que actualmente lleva el equipo, así también como impedir que se trabaje sobre patrones adicionales.
Sin hacer esto, conseguimos que nuestro código siga lógicas de programación muy dispares, haciéndolo menos entendible.


## Buenas Practicas

### Adoptar un modelo por capas
Es importante aprender a mantener un modelo de delegación de responsabilidades para poder tener nuestro código bien segmentado
Tener contempladas las capas y no mezclarlas dentro de la práctica ayudarán a un código bastante limpio, ordenado y escalable

### Manejo de entornos
Tener contemplados los diferentes entornos en los que podrá correr nuestro código, hace necesario que nuestras variables cambien también con el fin de no afectar contextos reales, a contextos de desarrollo, y contextos de prueba. 
Todo desarrollo serio trabaja bajo al menos 3 entornos.

* El entorno pensado para desarrollar: Un entorno bastante dinámico, volátil. Plausible a errores y modificaciones.
* El entorno pensado para pruebas: Un entorno contemplado con datos más “serios” pensados para pasar por operaciones que NO deberían fallar.
* Entorno productivo : El entorno final que puede apreciar el cliente. Éste tiene por objetivo ser SIEMPRE funcional para el cliente. El deber ser, es que este entorno jamás tenga un error que el cliente pueda percibir.


### Testing
Adoptar prácticas de testing como el TDD para la creación de nuestros códigos, pueden salvarnos de situaciones muy engorrosas en productivo o puede evitar el rechazo de nuestros avances. 

Contemplar pruebas unitarias o de integración de nuestras funcionalidades permite darnos la seguridad de que “todo” saldrá bien cuando se haga el despliegue de la misma, o al menos reducirá al mínimo el rango de error de éste.
No hace falta ser un departamento de QA para probar tus propias funcionalidades.

### Loggear y documentar
Tener una buena herramienta para mostrar mensajes de diferentes niveles (informativos, de alerta o de error, por ejemplo), permiten que la aplicación tenga un flujo más controlado, y nos permitirá atender sólo los mensajes de nuestro servidor que nos interesan
Además, una correcta documentación permitirá que el código sea más entendible para el futuro desarrollador que lo lea (o, también para nosotros cuando volvamos en unos meses) 🤭





