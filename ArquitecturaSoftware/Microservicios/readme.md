# Arquitectura de Microservicios - Conceptos principales

## Proxy (Proxy Directo o Proxy de reenvio)
Un **proxy** es un servidor que se coloca frente a uno o mas **clientes** y modera todo el tráfico de navegación web (Lo inspecciona y aplica políticas de seguridad corporativa y de uso aceptable). Si se aprueba el tráfico, el proxy lo envía a su destino en nombre del cliente y realiza las mismas acciones para cualquier respuesta.

## Proxy Inverso
Un **proxy inverso** es un servidor que se sitúa delante de uno o varios **servidores web**, e intercepta las solicitudes de los clientes.

## API Gateway
La entrada del Ecosistema de los microservicios se llama Gateway, el cual es basicamente un redireccionador. Las Api Gateway son un tipo especifico de *Proxy Inverso**.
Para configurar microservicios dentro de nuestro proyecto, en el pom del padre declaramos a cada microservicio(proyecto hijo) en la seccion modules, como un modulo (entre tags module). Luego, cada microservicio debe tener la informacion del proyecto padre en parent (reemplazando lo que viene por defecto en el pom).

## Ingress controller
El Ingress controller es basicamente un proxy inverso para Kubernetes.
Actua como un proxy inverso, ruteando el trafico del exterior al servicio correcto dentro de un cluster de Kubernetes y te permite configurar balanceadores de carga HTTP o HTTPS en el cluster.
Se trata de un API object que determina como el trafico que ingresa de internet alcanza los servicios internos del cluster, lo que resulta en pedidos que se realizan a los distintos pods.
En si mismo, el Ingress no tiene poder sobre el sistema sino que depende de la configuracion del ingress controller que es quien balancea la carga a los pods y añade una capa de abstraccion al ruteo.

## Service Mesh
Un service mesh maneja el trafico entre servicios de Kubernetes (Conocidos como service-to-service or east‑west traffic) y es usado comunmente para conseguir la encriptacion end-to-end encryption (E2EE).

### Fuente
 * https://www.cloudflare.com/es-es/learning/cdn/glossary/reverse-proxy/
 * https://traefik.io/blog/reverse-proxy-vs-ingress-controller-vs-api-gateway/
