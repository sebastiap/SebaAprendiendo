# SpringBoot

## Que es Spring Boot?
Spring Boot es una herramienta para crear aplicaciones web

## Arquitectura de capas

### API Layer - Controller
Solo se encarga de obtener un pedido del usuario y dar una respuesta(invocando al Service)

### Service Layer - Service
Solo se encarga de usar la clase MovieRepository para obtener las peliculas

### Repository Layer
Habla con la base de datos para obtener las peliculas


## Anotaciones de Spring Boot

* @SpringBootAplication 
Indica al main que esta es una aplicacion de springboot,esto permite tener un comportamiento mas automatico al buscar las anotaciones relacionadas.


### Arquitectura de Capas

* @RestController
Es una anotacion que incluye:
  * @controller(marca la clase como un controlador web y todas sus respuestas seran una respuesta JSON) 
  * @ResponseBody(automaticamente respondera una respuesta HTTP)

* @RequestMapping
Es una anotacion que especifica que el metodo asociado hara una llamada HTTP(Se debera especificar el metodo). Debe ir dentro de un Rest controller.

* @Service
Definimos la clase como un servicio que brindara los metodos de negocio.
* @Repository
Definimos la clase como un repositorio el cual hara las consultas al origen de los datos.
* @Entity
Definimos la clase como una entidad, debe tener un id. Se relaciona con una entidad de la base/origen de los datos.


