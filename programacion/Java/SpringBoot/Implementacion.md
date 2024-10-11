# Implrmentando Arquitectura de Capas en SpringBoot

## Capas
Aplicaremos las siguientes capas:

### Controlador
Es la capa exterior de nuestra aplicacion, la cual realiza el manejo de la interfaz REST que interactua con el cliente y luego se comunica con la capa de servicios.

@RestController Es una anotacion que incluye:

@controller(marca la clase como un controlador web y todas sus respuestas seran una respuesta JSON)
@ResponseBody(automaticamente respondera una respuesta HTTP)
@RequestMapping Es una anotacion que especifica que el metodo asociado hara una llamada HTTP(Se debera especificar el metodo). Debe ir dentro de un Rest controller.

### Servicio
La capa de servicio aplica la logica de negocios e interactua con el repositorio si lo requiere.
@Service Definimos la clase como un servicio que brindara los metodos de negocio.

### Repositorio
Maneja el acceso a los datos.
@Repository Definimos la clase como un repositorio el cual hara las consultas al origen de los datos.

### Modelo
Es parte de la capa de Repositorio, cada clase representa una entidad de la base de datos.
* Para bases de dato relacionales utilizamos:
@Entity Definimos la clase como una entidad, debe tener un id. Se relaciona con una entidad de la base/origen de los datos. Se puede definir el argumento "name" para relacionarlo a una tabla en la Base.
* Para una base de datos no relacional se usa en cambio:
@Document Relacionamos la clase con un documento en la base de datos no relacional.
