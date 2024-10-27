# How this project was made

## To run this project
 * IntelliJ
 * The project is listening on http://localhost:8080/api/v1/movies

## Instructions to build a similar project
 * With the anotator @SpringBootApplication, we indicate that the Main Class is MoviesApplication.java
 * MongoDB configuration is in resources/application.properties
 * enviroment configuration are in resources/.env

## Tools

### Package
https://start.spring.io/
* Initializr generates spring boot project with just what you need to start quickly! [Spring Boot Maven Plugin Reference Guide](https://start.spring.io/)

### Dependencies used
 * Lombok - Project Lombok is a java library that automatically plugs into your editor and build tools, spicing up your java.
Never write another getter or equals method again, with one annotation your class has a fully featured builder, Automate your logging variables, and much more.
 * Spring Web - Spring Web provides integration features such as multipart file upload functionality and the initialization of the IoC container using Servlet listeners and a web-oriented application context. It also contains an HTTP client and the web-related parts of Spring remote support.

 * Spring Data Mongo DB - Sprint with MongoDB

 * SpringBoot Developer Tools

 * Spring dotenv (Added mannualy in the pom.xml)

## Documentation

### Reference Documentation
For further reference, please consider the following sections:

* [Repo for a REST API powered by Spring Boot written for a freeCodeCamp course](https://github.com/fhsinchy/movieist)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/3.2.0/maven-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/3.2.0/maven-plugin/reference/html/#build-image)
* [Spring Web](https://docs.spring.io/spring-boot/docs/3.2.0/reference/htmlsingle/index.html#web)
* [Spring Data MongoDB](https://docs.spring.io/spring-boot/docs/3.2.0/reference/htmlsingle/index.html#data.nosql.mongodb)
* [Spring Boot DevTools](https://docs.spring.io/spring-boot/docs/3.2.0/reference/htmlsingle/index.html#using.devtools)

### Guides
The following guides illustrate how to use some features concretely:

* [Spring Boot Tutorial by Amigoscode](https://youtu.be/9SGDpanrc8U?list=PLUr2QPxJqTfgWEFA0USr4sDOgZ3Ex2SJG)
* [Full Stack Development with Java Spring Boot, React, and MongoDB – Full Course](https://www.youtube.com/watch?v=5PdEmeopJVQ)

* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)
* [Accessing Data with MongoDB](https://spring.io/guides/gs/accessing-data-mongodb/)

5 COSAS que debes saber como Programador Backend SENIOR
1. Orm de Base de datos, tanto para operaciones de operaciones directas, functions, triggers, sql nativo y db en memoria.
2. Procesos en 2do plano e hilos
3. Realtime, Solicitudes en tiempo real
4. Patrones de diseño
5. Pruebas unitarias

Añadiria lo siguiente
6. Manejo adecuado de excepcions y logs.
7. Codigo limpio
8. Manejo de Concurrencia
9. Expresiones regulares y cron expresion.
10. (Java) dominio de los generics
11. Framework robusto(Java springboot) y microservicios.
12. Brokens de mensajeria entre aplicaciones o servicios
13. Manejo elegante de envio de correos.
14. Hash, base 64, encriptacion, firmado con certificados, jks.
15. Gestion de cambios de db: flyway
16. Documentacion de apis rest/soap: swagger