# Arquitectura de Microservicios - Conceptos principales

## Que Es?
La arquitectura de microservicios, es un enfoque a la hora de desarrollar que consiste en construir nuestra aplicacion como un grupo de micro servicios, los cuales tienen cada uno una unica responsabilidad y se comunican con mecanismos ligeros.. Cada servicio se encarga de implementar una funcionalidad completa del negocio. Cada servicio es desplegado de forma independiente y puede estar programado en distintos lenguajes y usar diferentes tecnologías de almacenamiento de datos.

## Caracteristicas
* Los componentes son servicios
* Organizada en torno a funcionalidades
* Productos, no proyectos: se busca que el equipo tenga control del producto durante todo el ciclo de vida.
* Extremos inteligentes, tuberias bobas: Los metodos de invocacion son sencillos y la logica esta en los componentes
* Mejor tecnologia para cada componente
* Gestion de datos descentralizada : Cada componente maneja los datos de la forma que mas le convenga.
* Diseño evolutivo
* Automatización de la infraestructura: Se orientan a CI/CD.
* Diseño tolerante a fallos : Las aplicaciones necesitan ser diseñadas de modo que puedan tolerar las fallas de los distintos servicios.

## Componentes

### Proxy (Proxy Directo o Proxy de reenvio)
Un **proxy** es un servidor que se coloca frente a uno o mas **clientes** y modera todo el tráfico de navegación web (Lo inspecciona y aplica políticas de seguridad corporativa y de uso aceptable). Si se aprueba el tráfico, el proxy lo envía a su destino en nombre del cliente y realiza las mismas acciones para cualquier respuesta.

### Proxy Inverso
Un **proxy inverso** es un servidor que se sitúa delante de uno o varios **servidores web**, e intercepta las solicitudes de los clientes.

### API Gateway
La entrada del Ecosistema de los microservicios se llama Gateway, el cual es basicamente un redireccionador. Las Api Gateway son un tipo especifico de *Proxy Inverso**.
Para configurar microservicios dentro de nuestro proyecto, en el pom del padre declaramos a cada microservicio(proyecto hijo) en la seccion modules, como un modulo (entre tags module). Luego, cada microservicio debe tener la informacion del proyecto padre en parent (reemplazando lo que viene por defecto en el pom).

### Ingress controller
El Ingress controller es basicamente un proxy inverso para Kubernetes.
Actua como un proxy inverso, ruteando el trafico del exterior al servicio correcto dentro de un cluster de Kubernetes y te permite configurar balanceadores de carga HTTP o HTTPS en el cluster.
Se trata de un API object que determina como el trafico que ingresa de internet alcanza los servicios internos del cluster, lo que resulta en pedidos que se realizan a los distintos pods.
En si mismo, el Ingress no tiene poder sobre el sistema sino que depende de la configuracion del ingress controller que es quien balancea la carga a los pods y añade una capa de abstraccion al ruteo.

### Service Mesh
Un service mesh maneja el trafico entre servicios de Kubernetes (Conocidos como service-to-service or east‑west traffic) y es usado comunmente para conseguir la encriptacion end-to-end encryption (E2EE).
Principalmente, estandariza la comunicacion entre servicios.

Los conceptos de API GATEWAY, LOAD BALANCER, Service Mesh son conceptos similares y que por momentos pueden sobreponerse uno al otro. Lo que hat que tener en cuenta es que :
 * API GATEWAY esta enfocado en redireccionar por RUTA distintas APIS.
 * LOAD BALANCER esta enfocado en redireccionar CARGA DE TRABAJO entre SERVIDORES.
 * Service Mesh maneja el trafico dentro de un KLUSTER.
 * El PROXY INVERSO es un concepto mas general, los 3 anteriores pueden ser un proxy inverso o bien interactuar con uno.

## Escalar un proyecto
Escalar Verticalmente: Agregar memoria , procesamiento y espacio de almacenamiento al servidor.
Escalar Horizontalmente : Agregar mas servidores.

### Fuente
 * https://www.cloudflare.com/es-es/learning/cdn/glossary/reverse-proxy/
 * https://traefik.io/blog/reverse-proxy-vs-ingress-controller-vs-api-gateway/
 * https://es.wikipedia.org/wiki/Arquitectura_de_microservicios
