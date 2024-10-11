# Ejemplo de Routing

Esta simple aplicacion que emula una pagina de juegos de Mesa, nos brinda un ejemplo facil de routing.

## Archivos importantes

### header.jsx
En este archivo que consiste en el componente Header de la pagina, se puede ver un ejemplo de Link (Utilizando utilizando el TAG correspondiente ). Link es similar al TAG "a" y nos permite ir a cierta url que luego será ruteada por el componente BrowserRouter.

# Repaso Teorico

## Router

Router es una herramienta que monitorea cambios en la URL para asi informar a React que debe modificar el DOM Virtual. Esto da la ilusion a los usuarios de que estan cambiando de pagina cuando en realidad la misma pagina va cambiando dinamicamente el contenido que muestra.

### react-router-dom

Para utilizar esta funcionalidad debemos instalar una libreria externa llamada react-router-dom

npm install react-router-dom


### Routes

Son las paginas virtuales que mostrara nuestra app segun la url ingresada..Cada una tiene un path que es la direccion url que nos llevaran a nuevas "paginas". Cada Route agrupa dentro de un tag <Route></Route> los componentes que integraran el contenido dinamico a renderizar para dicho componente. 

### BrowserRouter 
Es el tag que debe contener toda la aplicacion para monitorear cambios.


### exact - Palabra Reservada

Se utiliza la palabra reservada "exact" dentro de un route para indicar que se utilizara esa ruta si la ruta es exactamente ese path. En caso de no aclarar , la ruta se tomara como /* , es decir que si la url cumple que empieza con lo indicado en el path, sera suficiente para redirigirlo asi.

## Switch - Evitar la inclusion de varios Routes al mismo tiempo
Por defecto el router renderiza todas las rutas que cumplen su path indicado. Si las rutas estan dentro de un tag Switch, elegira solo la primera que cumpla la condicion.

## Link
El tag **Link** se utiliza para reemplazar el tag **"a"** de HTML. Ambos funcionan como un enlace, pero "a"(Anchor) envia un request a la página para que cargue el HTML correspondiente a esa ruta, pero si nosotros utilizamos el tag **Link** evitamos la redundancia ya que Router ya esta monitoreando esos cambios sin necesidad de un Request (El Request es justo lo que queremos evitar). Hay que tener en cuenta que cuando escribimos **Link** el HTML que sera escrito será un Anchor(<a>) pero internamente la url destino la manejará la librería Router.
Link usa la propiedad "to" en lugar de "href"

