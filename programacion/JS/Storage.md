# Local Storage

## Que es Local Storrage
Es un objeto de almacenamiento del navegador(browser) local que nos permite guardar objetos de javascript que **no se borran al refrescar o reiniciar el navegador**.

## Para que Sirve
Guardar información que permanecerá almacenada por **tiempo indefinido**; sin importar que el navegador se cierre. 

## Como se usa ?
A traves del objeto **localStorage** y sus metodos:
* setItem(): Este metodo se usa para agregar o modificar una key y un valor al localStorage.
* getItem(): Este metodo se usa para leer una key y su valor de localStorage.
* removeItem(): Este metodo se usa para borrar una key y su contenido de localStorage.
* clear(): Este metodo se usa para borrar todo el contenido de localStorage.
* key(): Pasandole un nro traera la key correspondiente a esa ubicacion dentro de localStorage(como si fuera un array)

# Session Storage

## Session Storage
Es un objeto de almacenamiento del navegador(browser) local que nos permite guardar objetos de javascript queduren **solo una sesion**.

## Para que Sirve
Almacena los datos de una sesión y éstos **se eliminan cuando el navegador se cierra**.

## Como se usa ?
A traves del objeto **sessionStorage** y sus metodos son identicos a localStorage.

## Las características de Local Storage y Session Storage son:
* Permiten almacenar entre 5MB y 10MB de información; incluyendo texto y multimedia
* La información está almacenada en la computadora del cliente y NO es enviada en cada petición del servidor, a diferencia de las cookies
* Utilizan un número mínimo de peticiones al servidor para reducir el tráfico de la red
* Previenen pérdidas de información cuando se desconecta de la red
* La información es guardada por domino web (incluye todas las páginas del dominio)

## Referencias
https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/
