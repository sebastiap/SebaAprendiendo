# Router
React Router es una colección de componentes de navegación la cual podemos usar tanto en web o en móvil con React Native.
Con esta librería vamos a obtener un enrutamiento dinámico gracias a los componentes, en otras palabras tenemos unas rutas que renderizan un componente.

## useParams
useParams devuelve un objeto de pares clave/valor de los parámetros de URL. Úselo para acceder a match.params de la <Ruta> actual.
Suponiendo que accedemos a una url : /blog/:slug
```
 let { slug } = useParams();  
```
Obtenemos el valor pasado en el parametro "slug" de la url en una variable llamada ***slug***.  
  
## useHistory
El hook useHistory nos da acceso al historial del navegador, que podemos usar para navegar.
  
## useLocation
El hook useLocation devuelve un objeto de ubicación que representa la URL actual.
El objeto tiene 2 claves:
* pathname: contiene la url que actual.
* state: el cual funciona como un objeto de estado que podemos personalizar pasandoles clave/valores propios. Se puede usar similar a como pasariamos props a un componente.

## Ejemplos
https://github.com/sebastiap/SebaAprendiendo/blob/main/React/router/ejemplos/BlogDetail.jsx
https://github.com/sebastiap/SebaAprendiendo/blob/main/React/router/ejemplos/section.jsx

## Ejemplo Integrado
https://github.com/sebastiap/spika-games/blob/main/src/components/section.jsx
https://github.com/sebastiap/spika-games/blob/main/src/components/common/blog/BlogDetail.jsx
  

## Bibliografia
* https://v5.reactrouter.com/web/api/Hooks
* https://johnserrano.co/blog/aprende-a-crear-rutas-con-react-router
