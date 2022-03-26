# Ejemplo de Routing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## - Switch - Evitar la inclusion de varios Routes al mismo tiempo
Por defecto el router renderiza todas las rutas que cumplen su path indicado. Si las rutas estan dentro de un tag Switch, elegira solo la primera que cumpla la condicion.
