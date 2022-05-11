# Creacion de un nuevo proyecto React
Daremos como ejemplo la creacion de una SPA(Single Page Aplication) , un tipo de pagina sencilla que puede crearse facilmente con React.

## Aplicación de página única
Una aplicación de página única (single-page application) es una aplicación que carga una única página HTML y todos los componentes necesarios (tales como JavaScript y CSS) para que se ejecute la aplicación. Cualquier interacción con la página o páginas subsecuentes no requiere hacer solicitudes al servidor lo que significa que la página no es recargada.

## Create React App
Create React App configura tu ambiente de desarrollo de forma que puedas usar las últimas características de Javascript, brindando una buena experiencia de desarrollo, y optimizando tu aplicación para producción.

- El comando basico para crear una aplicacion React es el siguiente:
  <code>
    npx create-react-app my-app
  </code>


- Para levantar el servidor :
  <code>
    npm start
  </code>

El arbol de directorios tipico de un nuevo proyecto React es el siguiente:
<pre>
+ node_modules/ - En este directorio se instalan todas los archivos de las librerias instaladas.  
+ public/  - En esta carpeta se guardan archivos estaticos que no se desea que sean procesados por Webpack, sino invocados desde el codigo propio
+ src/  - La carpeta que contiene el codigo en si. Tiene una estructura que definimos nosotros segun nos sea comodo.

  </pre>
 Y suele tener tipicamente estos 3 archivos:
 <pre>
+ package.json  - En este archivo se anota las librerias que utiliza el proyecto y han de ser instaladas.
+ package-lock.json - En este archivo se anota las librerias que utiliza el proyecto y han de ser instaladas pero con versiones fijas
+ README.md - Este archivo se incluye para que brinde informacion sobre nuestro proyecto a quien vea nuestro codigo.
</pre>



Importante: Tenemos que tener instalado Node primero.
