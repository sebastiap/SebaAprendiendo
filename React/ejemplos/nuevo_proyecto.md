# Creacion de un nuevo proyecto React

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
