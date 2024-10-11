# Vue

## Que es Vue?

Vue es un framework progresivo de javascript para la construcción de interfaces de usuario y aplicaciones de una sola página. 

## Caracteristicas principales

* Vue.js cuenta con una arquitectura de adaptación gradual que se centra en la representación declarativa y la composición de componentes. 
* La biblioteca central se centra sólo en la capa de vista. 
* Las características avanzadas necesarias para aplicaciones complejas como el enrutamiento, la gestión de estados y las herramientas de construcción se ofrecen a través de librerías y paquetes de apoyo mantenidos oficialmente, con Next.js como una de las soluciones más populares.
* Vue.js permite extender el HTML con atributos HTML llamados directivas.

## Directivas
Las directivas ofrecen funcionalidad a las aplicaciones HTML. Existen directivas incorporadas en VUe y otras definidas por el usuario.
Las directivas "dan poderes" al html.

Ejemplos:
* v-model
* v-if : Crea el elemento si se cumple cierta condicion.
* v-show : Muestra el elemento si se cumple cierta condicion.
* v-for: Crea un elemento por cada elemento de una lista array o matriz
* v-on: Controla los eventos (busca en el objeto "methods" de Vue)
* v-model: asocia un modelo a un evento html
* v-text: similar a la interpolacion {{}} muestra valores
* v-bind: asocia un atributo de un elemento html a traves de una clave

## Variables
Vue.js cuenta con variables particulares que permiten operar con la Instancia Vue.
$data es una vatiable que permite espiar el modelo.
this - en este contexto referencia a la instancia Vue.

## Funciones en Vue
Se declaran dentro del objeto methods y se evaluan cada vez que son llamadas.

## Propiedades Computadas
Son funciones computadas que pueden ser invocadas y utilizadas como variables. Hacen un proceso antes de renderizar la vista.


## Vue-dev-Tools
Extension del chrome utilizada para visualizar de forma comoda la instancia Vue de un sitio.

### Nuxt vs Next

https://www.vuemastery.com/blog/nuxt-vs-next-how-do-they-compare/
